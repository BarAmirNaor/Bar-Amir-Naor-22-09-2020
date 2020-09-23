import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
const BoughtProducts = ({products,onReceive}) => {
    const classes = useStyles();

    return (
        <div className={classes.pos}>
            <Typography className={classes.title} color="primary" gutterBottom>
                Bought Products
            </Typography>
            {products.map((product) => {
                return (<Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {product.store}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {product.price}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {product.deliveryDate}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>onReceive(product)} variant={"outlined"}>Mark as received</Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}
export default BoughtProducts;
