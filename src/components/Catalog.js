import React, {useContext} from "react";
import {ContextApp} from "../hooks/reducer";
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';

import CatalogItem from "./CatalogItem";

const useStyles = makeStyles({
    wrapper: {
        width: '80%',
        margin: '0 auto;',
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '20px'
    },
    title: {
        font: '500 20px/22px Roboto, sans-serif'
    },
    filter: {
        width: '100%',
        margin: '10px 0 10px',

        '& span': {
            marginRight: '20px'
        }
    },
    filter_button: {
        padding: '5px 10px',
        border: '1px solid #000',
        borderRadius: '10px'
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        fontFamily: 'Roboto, sans-serif',
        color: 'black',
        padding: '5px 0 5px'
    },
    header_title: {
        width: '50%'
    },
    header_vendor: {
        width: '30%',
        textAlign: 'center'
    },
    header_pack: {
        width: '10%',
        textAlign: 'center'
    },
    header_price: {
        width: '10%',
        textAlign: 'center'
    },
    body: {
        width: '100%',
        marginTop: '20px'
    },
});

function Catalog() {
    const {state} = useContext(ContextApp);
    const classes = useStyles();

    if (!state.app.rows.length) {
        return (
            <section className={classes.wrapper}>
                <h1 className={classes.title}>Список товаров</h1>
                <p>Список пуст</p>
            </section>
        )
    }

    return (
        <section className={classes.wrapper}>
            <h1 className={classes.title}>Список товаров</h1>
            <div className={classes.filter}>
                <span>Фильтровать по:</span>
                <button 
                    className={classes.filter_button} 
                    onClick={() => console.log(state)}
                >Цене</button>
            </div>
            <div className={classes.header}>
                <h4 className={classes.header_title}>Название</h4>
                <span className={classes.header_vendor}>Продавец</span>
                <span className={classes.header_pack}>Упаковка</span>
                <span className={classes.header_price}>Цена</span>
            </div>
            <div className={classes.body}>
                {state.app.rows.map(item =>
                    <Link to={`/detail` + item.id}>
                        <CatalogItem
                            className={classes.item}
                            key={item.id}
                            title={item.title}
                            vendor={item.vendor}
                            pack={item.pack}
                            price={item.price}
                        />
                    </Link>
                )}
            </div>
        </section>
    );
}

export default Catalog;
