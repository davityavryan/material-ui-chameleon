import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function CheckboxLabelPlacement() {
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel value="top" control={<Checkbox color="primary" />} label="Top" labelPlacement="top" />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Checkbox color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
            </FormGroup>
        </FormControl>
    );
}

export default CheckboxLabelPlacement;
