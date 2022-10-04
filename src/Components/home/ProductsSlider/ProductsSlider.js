import React, { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Icon
import * as Unicons from "@iconscout/react-unicons";


// Styles
import styles from "./ProductsSlider.module.css";

// Components
import ProductsSliderItems from "./ProductsSliderItems";
import Loading from "../../loading/Loading";

const ProductsSlider = ({ background, title, FetchFunction, productsData, href }) => {

  const sliderDiv = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFunction());
}, []);

const clickHandlerToRight = () => {
  sliderDiv.current.scrollLeft += 100;
};
const clickHandlerToLeft = () => {
  sliderDiv.current.scrollLeft -= 100;
};

  return (
    <div className="container">
        <h2 className={styles.title}>{title}</h2>
      <div style={{background: background}} className={styles.content}>
        <button onClick={clickHandlerToLeft}>
          <Unicons.UilAngleLeft />
        </button>
        <div ref={sliderDiv} className={styles.ProductsSlider}>
          {productsData.loading || productsData.products.length === 0 ? (
            <Loading />
          ) : (
            productsData.products.products.map((product) => (
              <ProductsSliderItems key={product.id} productData={product} />
            ))
          )}
          <div className={styles.moreProducts}>
            <Link to={href}><Unicons.UilArrowRight /></Link>
            <p>More {title}</p>
          </div>
        </div>
        <button onClick={clickHandlerToRight}>
          <Unicons.UilAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ProductsSlider;
