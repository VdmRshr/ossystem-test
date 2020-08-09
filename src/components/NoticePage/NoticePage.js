import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
const NoticePage = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' p={10} height='100%'>
            <Box align='center'>
            <Typography variant='h2'>Sorry, you don't have enough rights!</Typography>
            <Link to='/'>Return to Catalog Page</Link>
            </Box>
        </Box>
    );
};

export default NoticePage;