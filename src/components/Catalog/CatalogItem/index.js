import './styles.scss';

function CatalogItem({title, vendor, pack, price}) {
    return (
        <div className="catalogItem">
            <h4 className="catalogItem__title">{title}</h4>
            <span className="catalogItem__vendor">{vendor}</span>
            <span className="catalogItem__pack">{pack}</span>
            <span className="catalogItem__price">{price}</span>
        </div>
    );
}

export default CatalogItem;
