import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        marginTop: 12,
    },
});

const ProductCard = ({product, onReceive, usd}) => {
    const classes = useStyles();

    const [currency, setCurrency] = useState("USD");
    const [price, setPrice] = useState(product.price);

    const convertToILS = (priceInUSD) => {

        setCurrency("ILS");
        setPrice( (priceInUSD / usd).toFixed(2));

    }
    const convertToUSD = (priceInILS) => {

        setCurrency("USD");
        setPrice( (priceInILS * usd).toFixed(2));

    }
    return (<Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5" component="h2">
                {product.store}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {`${price} ${currency === "USD" ? "$" : "₪"}`}
            </Typography>
            <Button size="small" onClick={() => {
                currency === "USD" ? convertToILS(price) : convertToUSD(price)
            }} variant={"outlined"}>
                {`Show in ${currency === "USD" ? "ILS" : "USD"}`}
            </Button>
            <Typography variant="body2" component="p">
                {product.deliveryDate}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => onReceive(product)} variant={"outlined"}>Mark as received</Button>
        </CardActions>
    </Card>)
}
export default ProductCard;
