import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../../Redux/cart/cartAction'

// Icons
import * as Unicons from "@iconscout/react-unicons";

// Functions
import { isInCart, quantityCount } from '../../functions/functions'

// Styles
import styles from './CartButtons.module.css'

const CartButtons = ({ data }) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.cartState)

    return (
        <div className={styles.buttons}>
         {quantityCount(state, data.id) === 1 && <button id={styles.remove} className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><Unicons.UilTrash /> </button>}
         {quantityCount(state, data.id) > 1 && <button id={styles.minus} className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: data})}><Unicons.UilMinus /></button>}
         {quantityCount(state, data.id) > 0 && <span className={styles.counter}>{quantityCount(state, data.id)}</span>}
         {
              isInCart(state, data.id) ?
              <button id={styles.plus} className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: data})}><Unicons.UilPlus /></button> :
              <button className={styles.addtocart} onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button>
          }
        </div>
    );
};

export default CartButtons;