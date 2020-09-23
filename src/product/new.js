import React, {useState} from "react";
import {v4 as uuid} from "uuid";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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
            "deliveryDate": deliveryDate,
            "currency":"USD"

        }
        addProduct(newProduct);
        handleClearForm(event)
    }

    return (<Grid container direction={"row"} >
            <Typography variant="h5" gutterBottom>
                Please add an item
            </Typography>
            <Grid container direction={"row"} spacing={3} xs={12}  >
                    <Grid item  onSubmit={handleFormSubmit}>
                        <TextField
                            id="itemName"
                            name="itemName"
                            label="Item name"
                           variant="outlined"
                            autoComplete="given-name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            id="onlineStore"
                            name="onlineStore"
                            label="Online store"
                            variant="outlined"
                            autoComplete="online-store"
                            onChange={e => setStore(e.target.value)}
                            value={store}

                        />
                    </Grid>
                    <Grid item  >
                        <TextField
                            required
                            id="price"
                            name="price"
                            label="Price (in USD)"
                            variant="outlined"
                            type="number"
                            onChange={setFixedPrice}
                            value={price}
                        />
                    </Grid>
                    <Grid item >

                        <TextField
                            id="Delivery"
                            name="Delivery"
                            variant="outlined"
                            label="DeliveryDate"
                            type="date"
                            onChange={e => setDeliveryDate(e.target.value)}
                            value={deliveryDate}
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item container  spacing={3}>
                        <Grid item>
                        <Button variant="contained" onClick={handleFormSubmit}>
                            Submit
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" onClick={handleClearForm}>
                            Clear
                        </Button>
                        </Grid>
                    </Grid>
        </Grid>
    </Grid>)
}
export default AddProduct;
