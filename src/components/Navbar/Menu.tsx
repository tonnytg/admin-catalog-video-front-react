import * as React from 'react';
import {IconButton, MenuItem, Menu as MuiMenu} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import routes, {MyRouteProps} from "../../routes";
import {Link} from "react-router-dom";
import {randomInt} from "crypto";

const listRoutes = [
    'dashboard',
    'categories.list',
    'categories.create',
    'categories.edit',
];
const menuRoutes = routes.filter(route => listRoutes.includes(route.name));

export const Menu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <React.Fragment>
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

            <MuiMenu
                id="menu-appbar"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal:'center'}}
                getContentAnchorEl={null}
            >
                {
                    listRoutes.map(
                        (routeName, key) => {
                                const route = menuRoutes.find(route => route.name === routeName) as MyRouteProps;
                                if ( route !== undefined) {
                                    return (
                                        <MenuItem
                                            key={key}
                                            component={Link}
                                            to={ route.path as string}
                                            onClick={handleClose}
                                        >
                                            {route.label}
                                        </MenuItem>
                                    )
                                }
                        })
                }
            </MuiMenu>
        </React.Fragment>
    );
};


export default Menu;