import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from "@material-ui/core/Box";
import {ReactComponent as Logo} from '../../images/matchjet.svg'
import {Link} from 'react-router-dom'
import Drawer from "@material-ui/core/Drawer";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        background:'#ff9800',
        marginBottom: "30px"
    }
}));

const Header = () => {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(false);

    const menuHandler = () => {
        setOpenMenu(true);
    }
    const onCloseMenu = () => {
        setOpenMenu(false);
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Box flexGrow='1' display='flex'>
                    <Link to='/'> <Logo/></Link>
                </Box>
                <IconButton color="inherit" onClick={menuHandler}>
                    <MenuIcon/>
                </IconButton>
                <Drawer open={openMenu} onClose={onCloseMenu} anchor='right' pb={12}>
                    <ListItem button component={Link} to="/" mt={4} onClick={onCloseMenu}>
                        <ListItemIcon><DevicesOtherIcon htmlColor='#ff9800' fontSize='large'/></ListItemIcon>
                        <ListItemText primary={"Catalog"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/add-product" onClick={onCloseMenu}>
                        <ListItemIcon><AddCircleIcon htmlColor='#ff9800' fontSize='large'/></ListItemIcon>
                        <ListItemText primary={"Add Product"}/>
                    </ListItem>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Header;