import React from 'react';

// Styles
import styles from './ItemCategory.module.css'

const ItemCategory = ({image, title}) => {
    return (
        <div className={styles.item}>
            <img src={image} alt="category" />
            <p>{title}</p>
        </div>
    );
};

export default ItemCategory;