import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

// Functions
import { getNewPrice } from "../../functions/functions";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../Redux/detailsProducts/detailsAction";

// Styles
import styles from "./Details.module.css";

// Components
import Loading from "../loading/Loading";
import CartButtons from "../cartButtons/CartButtons";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// required modules
import { Pagination } from "swiper";

const Details = () => {
  const dispatch = useDispatch();
  const detailsData = useSelector((state) => state.detailsState);
  const {
    title,
    price,
    description,
    discountPercentage,
    category,
    brand,
    images,
  } = detailsData.details;

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  const pagination = {
    clickable: true,
  };

  return (
    <div className={styles.details}>
      <div className="container">
        {detailsData.loading ? (
          <Loading />
        ) : (
          <div className={styles.content}>
            <div className={styles.imageGallery}>
              <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className={styles.swiper}
              >
                {images?.map((src) => (
                  <SwiperSlide>
                    <img src={src} alt="image" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.images}></div>
            </div>
            <div className={styles.detailsItem}>
              <div>
                <h1 className={styles.title}>{title}</h1>
                <h4 className={styles.category}>
                  <span>Category: </span>
                  {category}
                </h4>
                <h4 className={styles.brand}>
                  <span>Brand: </span>
                  {brand}
                </h4>
              </div>
              <p className={styles.description}>{description}</p>
              <div className={styles.price_off}>
                <p className={styles.price}>
                  {getNewPrice(price, discountPercentage)} $
                </p>
                <span className={styles.off}>{discountPercentage}% Off</span>
                <p className={styles.oldPrice}>{price} $</p>
              </div>
                <CartButtons data={detailsData.details} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
