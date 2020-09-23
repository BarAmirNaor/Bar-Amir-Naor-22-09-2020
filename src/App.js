import React, {useState} from 'react';

import AddProduct from "./product/new";
import AppBar from "./appBar";
import BoughtProducts from "./product/bought";
import ReceivedProducts from "./product/received";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useFetch from "./hooks/useFetch";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function App() {
    const [value, setValue] = React.useState(0);
    const rates = useFetch("https://api.exchangeratesapi.io/latest/?base=ILS");


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [boughtProducts, setBoughtProducts] = useState([]);
    const [receivedProducts, setReceivedProducts] = useState([]);

    const addProductToBought = (product) => {
        setBoughtProducts(products => [...products, product]);
    }

    const removeProductFromBought = (product) => {
        const {id} = product;
        setBoughtProducts(boughtProducts.filter(product => product.id !== id));
    }
    const addProductToReceived = (product) => {
        setReceivedProducts(products => [...products, product]);
    }

    const onReceivedProduct = (product) => {
        removeProductFromBought(product)
        addProductToReceived(product)
    }
    if (!rates.response) {
        return <div>Loading...</div>;
    }
    return (
        <div className="App">
            <AppBar value={value} handleChange={handleChange}/>
            <AddProduct addProduct={addProductToBought}/>
            <hr/>
            <TabPanel value={value} index={0}>
                <BoughtProducts products={boughtProducts} onReceive={onReceivedProduct} rates={rates.response.rates}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ReceivedProducts products={receivedProducts}/>
            </TabPanel>
        </div>
    );
}

export default App;
