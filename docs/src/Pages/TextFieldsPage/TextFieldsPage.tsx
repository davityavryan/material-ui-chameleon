import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { IconsTextFields, InputAdornmentsTextFields, MultilineTextFields, VariantsTextFields } from './Components';

function TextFieldsPage() {
    return (
        <Fragment>
            <Frame title="TextField">
                <VariantsTextFields />
            </Frame>

            <Frame title="Multiline">
                <MultilineTextFields />
            </Frame>

            <Frame title="Icons">
                <IconsTextFields />
            </Frame>

            <Frame title="Input Adornments">
                <InputAdornmentsTextFields />
            </Frame>
        </Fragment>
    );
}

export default TextFieldsPage;
