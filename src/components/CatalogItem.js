import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        fontFamily: 'Roboto, sans-serif',
        textDecoration: 'none',
        color: 'gray',
        backgroundColor: 'white',
        transition: 'color 0.3s ease, background-color 0.3s ease',
        padding: '5px 0 5px',

        '&:hover': {
            backgroundColor: '#e2e2e2',
            color: 'black',
         },
    },
    title: {
        width: '50%',
    },
    vendor: {
        width: '30%',
    },
    pack: {
        width: '10%',
    },
    price: {
        width: '10%',
    },
});

function CatalogItem({title, vendor, pack, price}) {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h4 className={classes.title}>{title}</h4>
            <span className={classes.vendor}>{vendor}</span>
            <span className={classes.pack}>{pack}</span>
            <span className={classes.price}>{price}</span>
        </div>
    );
}

export default CatalogItem;
