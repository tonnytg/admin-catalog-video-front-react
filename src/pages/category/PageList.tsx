// @flow
import * as React from 'react';
import {Page} from "../../components/Page";
import {Box} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import {Link} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add"
import Table from "./Table";

const PageList = () => {
    return (
        <Page title={"Categories"}>
            <Box dir={'rtl'}>
                <Fab
                    title='Adicionar categoria'
                    size="small"
                    component={Link}
                    to="/categories/create"
                >
                    <AddIcon />
                </Fab>
            </Box>
            <Box>
                <Table/>
            </Box>
        </Page>
    );
};

export default PageList;