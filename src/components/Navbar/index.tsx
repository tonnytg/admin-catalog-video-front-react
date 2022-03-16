import * as React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
import logo from "../../static/img/logo.png"

const useStyles = makeStyles({
    toolbar:{
        backgroundColor: '#000000'
    }
})

export const Navbar = () => {
    const classes = useStyles();
    console.log(classes)
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography>
                    <img src={logo} alt="Codeflix" />
                </Typography>
                <Button color="inherit" >Login</Button>

            </Toolbar>
        </AppBar>
    );
};