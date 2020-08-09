import {
    PRODUCT_ADDED_TO_CATALOG,
    PRODUCT_REMOVE_FROM_CATALOG,
    ALL_PRODUCTS_REMOVE_FROM_CATALOG
} from "../types";


const productAddedToCatalog = (id) => {
    return {
        type: PRODUCT_ADDED_TO_CATALOG,
        payload: id
    }
}
const productRemoveFromCatalog = (id) => {
    return {
        type: PRODUCT_REMOVE_FROM_CATALOG,
        payload: id
    }
}
const allProductsRemoveFromCatalog = () => {
    return {
        type: ALL_PRODUCTS_REMOVE_FROM_CATALOG
    }
}


export {
    productAddedToCatalog,
    productRemoveFromCatalog,
    allProductsRemoveFromCatalog
};