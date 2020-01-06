import React from 'react';
import PropTypes from 'prop-types';

import objectPath from 'object-path';

import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import makeStyles from '@material-ui/core/styles/makeStyles'

import themeKeyLabel from '../../utils/themeKeyLabel';
import { themeMap, typesMap } from '../../utils/themeMap';

// TODO: separate theme for this file? :/
const defaultTheme = createMuiTheme();

const useStyles = makeStyles(({ palette, spacing }) => ({
    root: {
        position: 'relative',

        width: '100%',
        overflow: 'auto',
        maxHeight: spacing(85),

        backgroundColor: palette.background.paper,
    },
    listItem: ({ isTopLevel }) => {
        const listItemStyles = {
            justifyContent: 'space-between',
        };

        if (isTopLevel) {
            listItemStyles.paddingTop = spacing(1.25);
            listItemStyles.paddingBottom = spacing(1.25);
        }

        return listItemStyles;
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    listSubHeader: {
        backgroundColor: palette.background.default,
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

function Parser({ item, itemKey, defaultValue, onChange, isTopLevel }) {
    const classes = useStyles({ isTopLevel });

    const mapItem = objectPath.get(themeMap, itemKey);

    if (typeof item === 'function' || (mapItem && mapItem.type === 'skip')) {
        return null;
    }

    if (typeof item === 'object') {
        return (
            <List className={classes.root} subheader={<li />}>
                {Object.entries(item).map(([nestedItemKey, nestedItem]) => {
                    const themeKey = `${itemKey}.${nestedItemKey}`;

                    if (typeof nestedItem !== 'object') {
                        return (
                            <Parser
                                key={themeKey}
                                item={nestedItem}
                                itemKey={themeKey}
                                defaultValue={objectPath.get(defaultTheme, themeKey)}
                                onChange={onChange}
                            />
                        );
                    }

                    return (
                        <li key={themeKey} className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader className={classes.listSubHeader}>
                                    {themeKeyLabel(themeKey)}
                                </ListSubheader>

                                <Parser
                                    key={themeKey}
                                    item={nestedItem}
                                    itemKey={themeKey}
                                    defaultValue={objectPath.get(defaultTheme, themeKey)}
                                    onChange={onChange}
                                />
                            </ul>
                        </li>
                    );
                })}
            </List>
        );
    }

    if (mapItem) {
        const { type, ...props } = mapItem;

        const Component = typesMap[type];

        // const isDry = JSON.stringify(defaultValue) === JSON.stringify(item);

        return (
            <ListItem className={classes.listItem}>
                <Component
                    {...props}
                    value={item}
                    themeKey={itemKey}
                    onChange={onChange(itemKey)}
                />
            </ListItem>
        );
    }

    return (
        <ListItem className={classes.listItem}>
            <Box overflow="auto">
                <pre>{itemKey} - {JSON.stringify(item, null, 4)}</pre>
            </Box>
        </ListItem>
    );
}

Parser.propTypes = {
    item: PropTypes.any.isRequired,
    itemKey: PropTypes.string.isRequired,
    defaultValue: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    isTopLevel: PropTypes.bool,
};

Parser.defaultProps = {
    isTopLevel: false,
};

export default Parser;
