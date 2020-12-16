import './styles.scss';
import { Link } from 'react-router-dom';

function CatalogItem({title, vendor, pack, price}) {
    return (
        <Link to="/" className="catalogItem">
            <h4 className="catalogItem__title">{title}</h4>
            <span className="catalogItem__vendor">{vendor}</span>
            <span className="catalogItem__pack">{pack}</span>
            <span className="catalogItem__price">{price}</span>
        </Link>
    );
}

export default CatalogItem;
