import './styles.scss';
import CatalogItem from "./CatalogItem";
import { BrowserRouter  } from 'react-router-dom'

function Catalog({rows}) {
    return (
        <section className="catalog">
            <BrowserRouter >
                {rows.map(item =>
                    <CatalogItem
                        className="catalog__item"
                        key={item.id}
                        title={item.title}
                        vendor={item.vendor}
                        pack={item.pack}
                        price={item.price}
                    />
                )}
            </BrowserRouter >
        </section>
    );
}

export default Catalog;
