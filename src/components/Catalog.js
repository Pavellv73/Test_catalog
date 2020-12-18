import React, {useContext} from "react";
import {ContextApp} from "../hooks/reducer";
import CatalogItem from "./CatalogItem";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        width: '80%',
        margin: '0 auto;',
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '20px'
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
                <h1>Список товаров</h1>
                <p>Список пуст</p>
            </section>
        )
    }

    return (
        <section className={classes.wrapper}>
            <h1>Список товаров</h1>
            <div className={classes.body}>
                {state.app.rows.map(item =>
                    <CatalogItem
                        className={classes.item}
                        key={item.id}
                        title={item.title}
                        vendor={item.vendor}
                        pack={item.pack}
                        price={item.price}
                    />
                )}
            </div>
        </section>
    );
}

export default Catalog;
