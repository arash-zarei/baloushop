// import React from "react";

// import { Link } from "react-router-dom";

// // Function
// import { shorted, getNewPrice } from "../../functions/functions";

// // Styles
// import styles from "./Product.module.css";

// // Components
// import CartButtons from "../cartButtons/CartButtons";

// const Product = ({ productsData }) => {
//   const { thumbnail, price, discountPercentage, title, category, brand, id } =
//     productsData;

//   return (
//     <div className={styles.cardProduct}>
//       <div className={styles.img_price_name}>
//         <img src={thumbnail} alt="image" />
//         <div className={styles.price_off}>
//   <div>
//     <p className={styles.newPrice}>
//       {getNewPrice(price, discountPercentage)}
//     </p>
//     <p className={styles.oldPrice}>{price} $</p>
//   </div>
//   <span className={styles.off}>{discountPercentage.toFixed(0)}%</span>
// </div>
// <p className={styles.title}>{shorted(title)}</p>
// <p className={styles.brand}>
//   <span>Brand: </span>
//   {brand}
// </p>
// <p className={styles.category}>
//   <span>Category:</span> {category}
// </p>
//         <Link to={`/details/${id}`}>Details</Link>
//       </div>
//       {
//         <div className={styles.buttons}>
//           <CartButtons data={productsData} />
//         </div>
//       }
//     </div>
//   );
// };

// export default Product;



import React from "react";

import { Link } from "react-router-dom";

// Function
import { shorted, getNewPrice } from "../../functions/functions";

// Styles
import styles from "./Product.module.css";

// Components
import CartButtons from "../cartButtons/CartButtons";

const Product = ({ productsData }) => {
  const { thumbnail, price, discountPercentage, title, category, brand, id } =
    productsData;

  return (
    <div className={styles.cardProduct}>
      <div className={styles.image}>
        <img src={thumbnail} alt="image" />
      </div>
      <div className={styles.details}>
          <p className={styles.title}>{shorted(title)}</p>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.category}>Category: {category}</p>
          <div className={styles.price_off}>
            <p className={styles.price}>{getNewPrice(price, discountPercentage)}$</p>
            <p className={styles.off}>{discountPercentage.toFixed(0)}%</p>
            <p className={styles.oldPrice}>{price}$</p>
          </div>
          <Link to={`/details/${id}`}>Details</Link>
      </div>
        <CartButtons data={productsData} />
    </div>
  );
};

export default Product;
