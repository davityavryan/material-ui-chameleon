import React, { Fragment, memo } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import { SideBar } from 'Layouts';

import { ErrorBoundary } from 'Components';

function MainLayout({ children }) {
    return (
        <Fragment>
            <SideBar />

            <Box component="main" display="flex" alignItems="center" flexGrow={1} py={3}>
                <Container maxWidth="md">
                    <ErrorBoundary>{children}</ErrorBoundary>
                </Container>
            </Box>
        </Fragment>
    );
}

export default memo(MainLayout);
