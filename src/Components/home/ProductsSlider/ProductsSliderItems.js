import React from "react";

import { Link } from "react-router-dom";

// Functions
import { getNewPrice } from "../../../functions/functions";

// Styles
import styles from "./ProductsSliderItems.module.css";

const ProductsSliderItems = ({ productData }) => {
  const {thumbnail, price, discountPercentage, id, } = productData
  return (
    <div className={styles.ProductsSliderItems}>
      <img src={thumbnail} alt="products" />
      <div className={styles.price_off}>
        <div>
          <p className={styles.price}>{getNewPrice(price, discountPercentage)}</p>
          <p className={styles.oldPrice}>{price} $</p>
        </div>
        <span className={styles.off}>
          {discountPercentage.toFixed(0)}%
        </span>
      </div>
      <div className={styles.oldPrice_details}>
        <Link to={`/details/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default ProductsSliderItems;
