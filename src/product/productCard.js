import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
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
        product.currency="ILS";
        setPrice( (priceInUSD / usd).toFixed(2));
        product.price=(priceInUSD / usd).toFixed(2)

    }
    const convertToUSD = (priceInILS) => {

        setCurrency("USD");
        product.currency="USD";
        setPrice( (priceInILS * usd).toFixed(2));
        product.price=(priceInILS * usd).toFixed(2)

    }
    return (<Card className={classes.root} variant="outlined">
        <CardContent>
<Grid container spacing={3} xs={12} style={{display: "list-item"}}>
    <Grid item>
            <Typography className={classes.title} style={{fontWeight:"bold", fontSize:"24px",color:"red"}}  gutterBottom>
                {product.name}
            </Typography>
    </Grid>
    <Grid item>
            <Typography  >
                {product.store}
            </Typography>
    </Grid>
    <Grid item>
            <Typography className={classes.pos} >
                {`${price} ${currency === "USD" ? "$" : "₪"}`}

            </Typography>
        </Grid>
    <Grid item>
            <Button  size="small" style={{background:"red"}} onClick={() => {
                currency === "USD" ? convertToILS(price) : convertToUSD(price)
            }} variant={"outlined"}>
                {`Show in ${currency === "USD" ? "ILS" : "USD"}`}
            </Button>
    </Grid>
    <Grid item>
            <Typography >
                {product.deliveryDate}
            </Typography>
    </Grid>
    </Grid>
        </CardContent>
        <CardActions>
            <Button style={{background:"red"}} size="small" onClick={() => onReceive(product)} variant={"outlined"}>Mark as received
            </Button>
        </CardActions>
    </Card>)
}
export default ProductCard;
