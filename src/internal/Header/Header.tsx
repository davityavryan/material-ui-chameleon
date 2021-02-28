import React, { useContext } from 'react';

import { Button, IconButton, Paper, useTheme } from '@material-ui/core';

import ChameleonContext from '../ChameleonContext/ChameleonContext';

import useStyles from './Header.style';

interface IProps {
    onToggleOpen: any;
    onReset?: any;
    onSave: any;
    isOpen: boolean;
}

function Header({ isOpen, onToggleOpen, onReset, onSave }: IProps) {
    const { state, dispatch } = useContext(ChameleonContext);

    const { palette } = useTheme();

    const isDry = JSON.stringify(state.theme) === JSON.stringify(state.originalTheme);

    const classes = useStyles({ isOpen, isDry });

    const handleReset = () => {
        dispatch({ type: 'reset' });

        if (typeof onReset === 'function') {
            onReset();
        }
    };

    const handleSave = () => {
        onSave(state.theme);
    };

    return (
        <Paper className={classes.root}>
            {!isDry && isOpen && (
                <Button variant="contained" size="small" onClick={handleReset}>
                    Reset
                </Button>
            )}

            <IconButton onClick={onToggleOpen} data-testid="side-bar-logo-button">
                <svg width="1.5em" height="1.5em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <g fillRule="nonzero" fill="none">
                        <path
                            fill={palette.grey['400']}
                            fillOpacity=".77"
                            d="M128 19C67.808 19 19 67.808 19 128s48.808 109 109 109c10.052 0 18.167-8.114 18.167-18.167 0-4.723-1.817-8.962-4.724-12.232-2.785-3.149-4.602-7.388-4.602-11.99 0-10.052 8.115-18.167 18.167-18.167h21.436c33.427 0 60.556-27.128 60.556-60.555C237 62.358 188.192 19 128 19z"
                        />
                        <path
                            fill={palette.primary.main}
                            d="M62 128c-10.513 0-19-8.487-19-19s8.487-19 19-19 19 8.487 19 19-8.487 19-19 19z"
                        />
                        <path
                            fill={palette.secondary.main}
                            d="M97 80c-10.513 0-19-8.487-19-19s8.487-19 19-19 19 8.487 19 19-8.487 19-19 19z"
                        />
                        <path
                            fill={palette.error.main}
                            d="M156 80c-10.513 0-19-8.487-19-19s8.487-19 19-19 19 8.487 19 19-8.487 19-19 19z"
                        />
                        <path
                            fill={palette.common.white}
                            d="M194 128c-10.513 0-19-8.487-19-19s8.487-19 19-19 19 8.487 19 19-8.487 19-19 19z"
                        />
                    </g>
                </svg>
            </IconButton>

            {!isDry && isOpen && (
                <Button variant="contained" color="primary" size="small" onClick={handleSave}>
                    Save
                </Button>
            )}
        </Paper>
    );
}

export default Header;