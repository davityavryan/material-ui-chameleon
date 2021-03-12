module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    plugins: ['react-hooks', 'prettier'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
};
