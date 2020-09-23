import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductCard from './productCard';

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
const BoughtProducts = ({products,onReceive,rates}) => {
    const classes = useStyles();
    const usd = rates.USD;

    return (
        <div className={classes.pos}>
            <Typography className={classes.title} color="primary" gutterBottom>
                Bought Products
            </Typography>
            {products.map((product) => {
                return (<ProductCard product={product} onReceive={onReceive} usd={usd}/>)
            })}
        </div>
    )
}
export default BoughtProducts;
