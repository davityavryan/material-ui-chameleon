import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import delve from 'dlv';
import { dset } from 'dset';
import { Property } from 'csstype';

import { Box, Collapse } from '@material-ui/core';

import { ThemeProvider as MuiThemeProvider, createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

import { Editor, Header } from '../internal';

import { Context } from '../utils';

import useStyles from './SideBarEditor.style';

interface IProps {
    open?: boolean;
    onReset?: () => void;
    onExpandToggle?: (isOpen: boolean) => void;
    onSave: (newTheme: ThemeOptions) => void;
}

function SideBarEditor({ open = false, onReset, onExpandToggle, onSave }: IProps) {
    const [isOpen, setIsOpen] = useState(open);

    const { state, dispatch } = useContext(Context);

    const editableTheme = createMuiTheme(state.theme);
    const defaultTheme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: editableTheme.palette.type,
                },
            }),
        [editableTheme.palette.type]
    );
    const sidebarTheme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: editableTheme.palette.type,
                },
                typography: {
                    button: {
                        textTransform: 'none',
                    },
                },
                overrides: {
                    MuiPopover: {
                        root: {
                            zIndex: `${editableTheme.zIndex.tooltip + 11} !important` as Property.ZIndex, // more than the highest zIndex
                        },
                    },
                },
            }),
        [editableTheme.palette.type]
    );

    const classes = useStyles({ isOpen });

    const handleToggleOpen = useCallback(() => {
        setIsOpen(!isOpen);

        if (typeof onExpandToggle === 'function') {
            onExpandToggle(!isOpen);
        }
    }, [isOpen]);

    const handleChange = (themeKey: string) => (newValue: unknown) => {
        // TODO: fix performance issue here
        const dynamicThemeCopy = JSON.parse(JSON.stringify(state.theme));

        const parentKey = themeKey.replace(/^(.*)\.[^.]*$/, '$1');
        const parentDefaultValue = delve(defaultTheme, parentKey);

        if (Array.isArray(parentDefaultValue)) {
            // If item is an array and we are setting by specific index, rest should be set from default theme
            dset(dynamicThemeCopy, parentKey, parentDefaultValue);
            dset(dynamicThemeCopy, themeKey, newValue);
        } else {
            // Material-UI will fail if palette's color is changes without having `main`. Set from default
            if (parentDefaultValue.main !== undefined && themeKey !== 'main') {
                dset(dynamicThemeCopy, `${parentKey}.main`, parentDefaultValue.main);
            }

            dset(dynamicThemeCopy, themeKey, newValue);
        }

        dispatch({
            type: 'update',
            payload: dynamicThemeCopy,
        });
    };

    // TODO: check if needed
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <MuiThemeProvider theme={sidebarTheme}>
            <div className={classes.root} data-testid="side-bar-editor">
                <Header
                    isOpen={isOpen}
                    onReset={onReset}
                    onSave={onSave}
                    onToggleOpen={handleToggleOpen}
                    data-testid="side-bar-header"
                />

                <Collapse in={isOpen} mountOnEnter unmountOnExit>
                    <Box m={1}>
                        <Editor theme={editableTheme} defaultTheme={defaultTheme} onChange={handleChange} />
                    </Box>
                </Collapse>
            </div>
        </MuiThemeProvider>
    );
}

export default SideBarEditor;
