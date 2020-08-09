import products from '../../products'
import {
    PRODUCT_ADDED_TO_CATALOG,
    PRODUCT_REMOVE_FROM_CATALOG,
    ALL_PRODUCTS_REMOVE_FROM_CATALOG
} from "../types";

const initialState = {
    products: products.products,
    userRole: 'admin',
     // userRole: 'user',
};

const deleteItem = (array, itemId) => {
    const itemIndex = array.findIndex(({id}) => id === itemId);
    return [
        ...array.slice(0, itemIndex),
        ...array.slice(itemIndex + 1)
    ]
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCT_ADDED_TO_CATALOG:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            };
        case PRODUCT_REMOVE_FROM_CATALOG:
            return {
                ...state,
                products: deleteItem(state.products, action.payload)
            };
        case ALL_PRODUCTS_REMOVE_FROM_CATALOG:
            return {
                ...state,
                products: []
            };
        default:
            return state;
    }
};
export default reducer;