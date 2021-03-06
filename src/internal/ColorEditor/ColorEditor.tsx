import React, { Fragment, memo } from 'react';

import { ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import { ColorPicker } from '../../internal';
import { themeKeyLabel } from '../../utils';

interface IProps {
    value: string;
    themeKey: string;
    onChange: (color: string) => void;
}

function ColorEditor({ value, themeKey, onChange }: IProps) {
    return (
        <Fragment>
            <ListItemText primary={themeKeyLabel(themeKey)} />

            <ListItemSecondaryAction>
                <ColorPicker color={value} onChange={onChange} />
            </ListItemSecondaryAction>
        </Fragment>
    );
}

export default memo(ColorEditor);
