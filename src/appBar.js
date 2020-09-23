import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        background:"red"
    },
    titleApp:{
        background:"red"
    }
}));


export default function ButtonAppBar({value,handleChange}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.titleApp}>
                    <Typography variant="h6" className={classes.title}>
                        Bar Store
                    </Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Bought Products"  />
                        <Tab label="Received Products"  />
                    </Tabs>
                </Toolbar>
            </AppBar>

        </div>
    );
}
