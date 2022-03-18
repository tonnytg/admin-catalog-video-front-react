import * as React from 'react';
import {IconButton, MenuItem, Menu as MuiMenu} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import routes, {MyRouteProps} from "../../routes";
import {Link} from "react-router-dom";

type Props = {
    
};
export const Menu = () => {

    const listRoutes = [
        'dashboard',
        'categories.lists',
    ];
    const menuRoutes = routes.filter(route => listRoutes.includes(route.name));

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
                <MenuItem onClick={handleClose}>
                    Categorias
                </MenuItem>
            </MuiMenu>
        </React.Fragment>
    );
};
