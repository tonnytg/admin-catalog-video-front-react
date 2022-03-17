import * as React from 'react';
import {AppBar, Button, Toolbar, Typography, Theme, makeStyles, IconButton, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu"
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='open drawer'
                    aria-controls='menu-appbar'
                    aria-haspopup="true"
                    onClick={handleOpen}
                >
                    < MenuIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    transformOrigin={{vertical: 'top', horizontal:'center'}}
                    getContentAnchorEl={null}
                >
                    <MenuItem>
                        Categorias
                    </MenuItem>
                </Menu>

                <Typography className={classes.title}>
                    <img src={logo} alt="Codeflix" className={classes.logo}/>
                </Typography>
                <Button color="inherit" >Login</Button>

            </Toolbar>
        </AppBar>
    );
};