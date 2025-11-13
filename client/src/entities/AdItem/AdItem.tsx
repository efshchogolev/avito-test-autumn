import styles from './ListItem.module.css'
import ListItem from '@mui/material/ListItem';
import {useNavigate} from "react-router";
import {APP_ROUTES} from "src/shared/config";

export const AdItem = () => {
    const navigate = useNavigate();

    return (
        <ListItem className={styles.item} onClick={() => {navigate(APP_ROUTES.ITEM())}}>
            <img src="" alt=""/>
            <div className={styles.infoContainer}>
                <span className={styles.name}>name</span>
                <span className={styles.price}>price</span>
                <span className={styles.info}>type / date</span>
            </div>
            <button className={styles.button} type={'button'}>Открыть -</button>
        </ListItem>
    );
};
