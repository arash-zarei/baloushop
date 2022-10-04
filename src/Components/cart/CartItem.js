import React from 'react';

// Styles
import styles from './CartItem.module.css'

// Functions
import { shorted } from '../../functions/functions';

// Components
import CartButtons from '../cartButtons/CartButtons';


const CartItem = (props) => {

    const {thumbnail, title, price, id} = props.data

    return (
        <div className={styles.cartItem}>
            <img src={thumbnail} alt={id} />
            <div className={styles.title}>
                <h2>{shorted(title)}</h2>
                <p>{price} $</p>
            </div>
            <div className={styles.btnsCart}>
                <CartButtons data={props.data} />
            </div>
        </div>
    );
};

export default CartItem;