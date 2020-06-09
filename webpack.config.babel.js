import fs from 'fs';
import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

const here = (dir) => (
    dir ? path.resolve(__dirname, dir) : __dirname
);

const dirs = {
    src: './gh-pages-src',
    dist: './gh-pages',
};

const devServerPackages = [
    'ansi-html',
    'ansi-regex',
    'events',
    'html-entities',
    'loglevel',
    'node-libs-browser',
    'punycode',
    'querystring-es3',
    'sockjs-client',
    'strip-ansi',
    'url',
    'webpack-dev-server',
];

export default (env, args = {}) => {
    const { mode = 'development' } = args;
    const isProduction = mode === 'production';

    return {
        mode,
        context: here(),
        entry: {
            index: `${dirs.src}/index.js`,
        },
        output: {
            path: here(dirs.dist),
            filename: 'js/[name]-[hash].js',
            chunkFilename: 'js/[name]-[chunkhash].js',
            sourceMapFilename: '[file].map',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                here('./node_modules'),
                here(dirs.src),
            ],
            alias: {
                'material-ui-chameleon': here('./build'),
            },
        },
        devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    sideEffects: false,
                    loader: {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                            comments: true,
                            cacheDirectory: here(`./node_modules/.cache/${mode}/js`),
                        },
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: [
                    {
                        from: `${dirs.src}/static/img`,
                        to: './img',
                    },
                    {
                        from: `${dirs.src}/static/browserconfig.xml`,
                        to: './browserconfig.xml',
                    },
                    {
                        from: `${dirs.src}/static/manifest.json`,
                        to: './manifest.json',
                    },
                ],
            }),
            new HtmlWebpackPlugin({
                template: `${dirs.src}/static/index.html`,
                cache: true,
                minify: isProduction && {
                    minifyCSS: true,
                    minifyJS: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                },
                // Fixes "Error: Cyclic dependency"
                // see https://github.com/marcelklehr/toposort/issues/20#issuecomment-388025176
                chunksSortMode: 'none',
            }),
            new ScriptExtHtmlWebpackPlugin({
                inline: isProduction && 'runtime',
                defaultAttribute: 'defer',
            }),
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    // Separate dev related packages
                    'webpack-dev-server': {
                        test: new RegExp(`[\\\\/]node_modules[\\\\/](${devServerPackages.join('|')})[\\\\/]`),
                        name: 'vendors/webpack-dev-server',
                        chunks: 'all',
                        priority: 2,
                    },
                    'material-ui-chameleon': {
                        test: (module) => /[\\/]material-ui-chameleon[\\/]build[\\/]/.test(module.request) || module.rawRequest === 'material-ui-chameleon',
                        name: 'vendors/material-ui-chameleon',
                        priority: 2,
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        enforce: true,
                        reuseExistingChunk: true,
                        name: (module) => {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]([^\\/]*)([\\/]([^\\/]*))?([\\/]([^\\/]*))?|$)/);

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            const packageName = match[1].replace('@', '');
                            const subPackageName = match[3];
                            const componentName = (match[7] || '').toLowerCase();

                            if (['material-ui', 'mdi'].includes(packageName)) {
                                if (componentName) {
                                    return `vendors/${packageName}/${subPackageName}/${componentName}`;
                                }

                                return `vendors/${packageName}/${subPackageName}`;
                            }

                            return `vendors/${packageName}`;
                        },
                    },
                },
            },
            minimizer: [
                new TerserPlugin({
                    cache: here(`./node_modules/.cache/${mode}/uglify-js`),
                    parallel: true,
                    sourceMap: true,
                    terserOptions: {
                        ecma: 8,
                        output: {
                            comments: /licen[sc]e/i,
                        },
                    },
                }),
            ],
        },
        performance: {
            hints: isProduction && 'warning',
            maxEntrypointSize: Infinity,
            maxAssetSize: 0.25 * 10 ** 6, // 0.25mb
        },
        stats: {
            assetsSort: 'chunkNames',
            children: false,
            modules: false,
            entrypoints: false,
            excludeAssets: /\.(jpe?g|png|webp|gif|ogg|m4a|mp4|webm|svg|ico|cur|eot|ttf|woff|woff2|map|LICENSE)$/i, // hiding images, fonts
        },
        devServer: {
            port: 4040,
            writeToDisk: true,
            compress: true,
            http2: true,
            https: {
                key: fs.readFileSync(here('./etc/dev-cert.key')),
                cert: fs.readFileSync(here('./etc/dev-cert.crt')),
            },
            overlay: {
                warnings: true,
                errors: true,
            },
            stats: {
                assetsSort: 'chunkNames',
                children: false,
                modules: false,
                entrypoints: false,
                excludeAssets: /\.(jpe?g|png|webp|gif|ogg|m4a|mp4|webm|svg|ico|cur|eot|ttf|woff|woff2|map|LICENSE)$/i, // hiding images, fonts
            },
        },
    };
};
