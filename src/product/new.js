import React, {useState} from "react";
import {v4 as uuid} from "uuid";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const AddProduct = ({addProduct}) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [store, setStore] = useState("")
    const [deliveryDate, setDeliveryDate] = useState("")


    const setFixedPrice = (event) => {
        const price = +event.target.value;
        setPrice(price);
    }
    const handleClearForm = (event) => {
        event.preventDefault();
        setName("");
        setPrice("");
        setStore("");
        setDeliveryDate("");
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            "id":uuid(),
            "name": name,
            "price": price.toFixed(2),
            "store": store,
            "deliveryDate": deliveryDate
        }
        addProduct(newProduct);
        handleClearForm(event)
    }


    return (<Grid container justify={"center"}>
        <Grid item xs={8} xl={6}>
            <Typography variant="h6" gutterBottom>
                Please add an item
            </Typography>
            <Grid container spacing={3}>
                <form onSubmit={handleFormSubmit}>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="itemName"
                            name="itemName"
                            label="Item name"
                            fullWidth
                            autoComplete="given-name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="onlineStore"
                            name="onlineStore"
                            label="Online store"
                            fullWidth
                            autoComplete="online-store"
                            onChange={e => setStore(e.target.value)}
                            value={store}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="price"
                            name="price"
                            label="Price (in USD)"
                            type="number"
                            onChange={setFixedPrice}
                            value={price}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel>Delivery Date</InputLabel>
                        <TextField
                            id="Delivery"
                            name="Delivery"
                            fullWidth
                            type="date"
                            onChange={e => setDeliveryDate(e.target.value)}
                            value={deliveryDate}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={handleFormSubmit}>
                            Submit
                        </Button>
                        <Button variant="contained" onClick={handleClearForm}>
                            Clear
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    </Grid>)
}
export default AddProduct;
