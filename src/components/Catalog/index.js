import React, {useContext} from "react";
import {ContextApp} from "../../hooks/reducer";
import CatalogItem from "./CatalogItem";

import './styles.scss';

function Catalog() {
    const {state} = useContext(ContextApp);

    if (!state.app.rows.length) {
        return (
            <section className="catalog">
                <h1 className="catalog__title">Список товаров</h1>
                <p>Список пуст</p>
            </section>
        )
    }

    return (
        <section className="catalog">
            <h1 className="catalog__title">Список товаров</h1>
            <div className="catalog__body">
                {state.app.rows.map(item =>
                    <CatalogItem
                        className="catalog__item"
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
