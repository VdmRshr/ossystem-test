import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    root: {
        height: '460px',
        paddingTop: "10px",
        paddingBottom: "10px"
    },
    media: {
        height: 0,
        paddingTop: "50%",
        backgroundSize: 'contain'
    },
    title: {
        height: '96px',
    },
    desc: {
        height: '100px',
        paddingBottom: "10px",
    },
}));

const CatalogItem = ({title, image, price, description, onDeleteItem, userRole}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    alt={title}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                        {description}
                    </Typography>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Typography variant="h6" color="textPrimary" component="p">
                            {price} $
                        </Typography>
                        {
                            userRole === "admin" &&
                            <IconButton onClick={onDeleteItem} component="span">
                                <CancelIcon fontSize='large' htmlColor='#f44336'/>
                            </IconButton>
                        }
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

CatalogItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    userRole: PropTypes.string.isRequired,
    onDeleteItem: PropTypes.func.isRequired
};

export default CatalogItem