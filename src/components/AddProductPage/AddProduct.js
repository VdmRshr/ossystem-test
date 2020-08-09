import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {productAddedToCatalog} from '../../redux/actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from "prop-types";

const formStyles = {
    minWidth: '300px'
};

const AddProduct = ({productAddedToCatalog, userRole}) => {

    const [item, setItem] = useState({
        id: null,
        title: '',
        image: '',
        description: '',
        price: '',

    });
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
    };
    const addNewProduct = (e) => {
        e.preventDefault();
        const errors = validateForm(item);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            const product = {
                id: 1 + Math.random(),
                title: item.title,
                image: item.image ? item.image : "https://newsrnd.com/images/no-image.png",
                description: item.description,
                price: parseFloat(item.price),
            };
            if (localStorage.getItem('newProducts') === null) {
                let products = [];
                products.push(product);
                localStorage.setItem('newProducts', JSON.stringify(products));
            } else {
                let products = JSON.parse(localStorage.getItem('newProducts'));
                products.push(product);
                localStorage.setItem('newProducts', JSON.stringify(products));
            }
            productAddedToCatalog(product);
            setItem({
                id: null,
                title: '',
                image: '',
                description: '',
                price: '',
            })
        }
    };

    const validateForm = (data) => {
        let errors = {};
        const expressionForUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
        const expressionForPrice = /^\d+(\.\d{1,2})?$/;
        const regexUrl = new RegExp(expressionForUrl);
        const regexPrice = new RegExp(expressionForPrice);
        if (data.image && !data.image.match(regexUrl)) errors.image = 'Please use a valid url';
        if (!data.title) errors.title = 'Please enter the product title';
        if (!data.description) errors.description = 'Please enter the product description';
        if (!data.price) errors.price = 'Please enter the product price';
        if (data.price && !data.price.match(regexPrice)) errors.price = 'Price must be an integer or a number with two decimal places';
        return errors
    };

    if (userRole === 'user') {
        return <Redirect to='/notice-page'/>
    }

    return (
        <Box display='flex' alignItems='center' justifyContent='center' m={4}>
            <Box>
                <Box mb={3}>
                    <Typography variant='h6' component='h1' align='center'>Add New Product</Typography>
                </Box>
                <form autoComplete="off" style={formStyles} noValidate onSubmit={addNewProduct}>
                    <Box mb={2}>
                        <TextField label="Title*"
                                   variant="outlined"
                                   fullWidth
                                   type='text'
                                   name='title'
                                   onChange={onChange}
                                   error={errors.title}
                                   helperText={errors.title}
                                   value={item.title}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField label="Image Link"
                                   variant="outlined"
                                   fullWidth
                                   type='text'
                                   name='image'
                                   onChange={onChange}
                                   error={errors.image}
                                   helperText={errors.image}
                                   value={item.image}/>
                    </Box>
                    <Box mb={2}>
                        <TextField label="Description*"
                                   variant="outlined"
                                   multiline
                                   rows={3}
                                   fullWidth
                                   name='description'
                                   onChange={onChange}
                                   error={errors.description}
                                   helperText={errors.description}
                                   value={item.description}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField label="Price*"
                                   variant="outlined"
                                   fullWidth
                                   type='text'
                                   name='price'
                                   onChange={onChange}
                                   error={errors.price}
                                   helperText={errors.price}
                                   value={item.price}/>
                    </Box>
                    <Box align='center'>
                        <IconButton type='submit'>
                            <AddCircleIcon fontSize='large' htmlColor='#ff9800'/>
                        </IconButton>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};
AddProduct.propTypes = {
    userRole: PropTypes.string.isRequired,
    productAddedToCatalog: PropTypes.func.isRequired
};

const mapStateToProps = ({userRole}) => {
    return {
        userRole
    }
};
const mapDispatchToProps = {
    productAddedToCatalog
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);