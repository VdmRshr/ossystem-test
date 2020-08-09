import React from 'react';
import {connect} from 'react-redux';
import {productRemoveFromCatalog} from '../../redux/actions';
import Grid from "@material-ui/core/Grid";
import CatalogItem from "../CatalogItem/CatalogItem";
import PropTypes from "prop-types";

const CatalogContainer = ({products, userRole, productRemoveFromCatalog}) => {

    const elements = products.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <Grid item key={item.id} lg={3} md={3} sm={6} xs={12}>
                <CatalogItem {...itemProps}
                             onDeleteItem={() => productRemoveFromCatalog(id)}
                             userRole={userRole}
                />
            </Grid>
        )
    });

    return (
        <Grid container spacing={1}>
            {elements}
        </Grid>
    )
};
CatalogContainer.propTypes = {
    products: PropTypes.array.isRequired,
    userRole: PropTypes.string.isRequired,
    productRemoveFromCatalog: PropTypes.func.isRequired
};

const mapStateToProps = ({products, userRole}) => {
    return {
        products,
        userRole
    }
};
const mapDispatchToProps = {
    productRemoveFromCatalog
};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);