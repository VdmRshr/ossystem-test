import React from 'react';
import {connect} from 'react-redux';
import {allProductsRemoveFromCatalog} from '../../redux/actions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '30px',
    },
    head: {
        background: '#f5f5f5',
    },
}));


const GeneralInformation = ({products, userRole, allProductsRemoveFromCatalog}) => {
    const classes = useStyles();
    const getQuantity = (array) => {
        return array.length
    }
    const getTotalPrice = (array) => {
        const total = (array.reduce((a, {price}) => a + parseFloat(price), 0)).toFixed(2);
        return total
    }
    const getAveragePrice = (array) => {
        let average = (getTotalPrice(array) / array.length).toFixed(2);
        average = parseFloat(average) || 0;
        return average

    }
    return (
        <TableContainer className={classes.root}>
            <Table>
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total Price</TableCell>
                        <TableCell align="center">Average Price</TableCell>
                        {userRole === "admin" &&
                        <TableCell align="center">Delete All Products</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">{getQuantity(products)}</TableCell>
                        <TableCell align="center">{getTotalPrice(products)} $</TableCell>
                        <TableCell align="center">{getAveragePrice(products)} $</TableCell>
                        {userRole === "admin" &&
                        <TableCell align="center">
                            <IconButton onClick={allProductsRemoveFromCatalog}>
                                <CancelIcon fontSize='large' htmlColor='#f44336'/>
                            </IconButton>
                        </TableCell>}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
GeneralInformation.propTypes = {
    products: PropTypes.array.isRequired,
    userRole: PropTypes.string.isRequired,
    allProductsRemoveFromCatalog: PropTypes.func.isRequired
};
const mapStateToProps = ({products, userRole}) => {
    return {
        products,
        userRole
    }
};
const mapDispatchToProps = {
    allProductsRemoveFromCatalog
};


export default connect(mapStateToProps, mapDispatchToProps)(GeneralInformation);