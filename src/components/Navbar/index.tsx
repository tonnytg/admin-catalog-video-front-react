import * as React from 'react';
import {AppBar, Button, Toolbar, Typography, Theme, makeStyles, IconButton, MenuItem} from "@material-ui/core";
import Menu from "./Menu"
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

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu />
                <Typography className={classes.title}>
                    <img src={logo} alt="Codeflix" className={classes.logo}/>
                </Typography>
                <Button color="inherit" >Login</Button>
            </Toolbar>
        </AppBar>
    );
};