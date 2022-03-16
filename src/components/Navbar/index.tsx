import * as React from 'react';
import {AppBar, Button, Toolbar, Typography, Theme, makeStyles } from "@material-ui/core";
import logo from "../../static/img/logo.png"

const useStyles = makeStyles((theme: Theme) => ({
    toolbar:{
        backgroundColor: '#000000'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        // gera um media query
        [theme.breakpoints.up('sm')]: {
            width: 170
        }
    }
}));

export const Navbar = () => {
    const classes = useStyles();
    console.log(classes)
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}>
                    <img src={logo} alt="Codeflix" className={classes.logo}/>
                </Typography>
                <Button color="inherit" >Login</Button>

            </Toolbar>
        </AppBar>
    );
};