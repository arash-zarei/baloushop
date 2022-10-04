import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

// Icon
import * as Unicons from "@iconscout/react-unicons";

// Styles
import styles from "./Categorys.module.css";

// Components
import ItemCategory from "./ItemCategory";


// Logos
import icone1 from "../../../Icons/box.png";
import icone2 from "../../../Icons/smartphone.png";
import icone3 from "../../../Icons/car-parts.png";
import icone4 from "../../../Icons/crop-top.png";
import icone5 from "../../../Icons/decor.png";
import icone6 from "../../../Icons/fragrance.png";
import icone7 from "../../../Icons/furniture.png";
import icone8 from "../../../Icons/high-heels.png";
import icone9 from "../../../Icons/jewelry.png";
import icone10 from "../../../Icons/laptop.png";
import icone11 from "../../../Icons/motorbike.png";
import icone12 from "../../../Icons/products.png";
import icone13 from "../../../Icons/shoe.png";
import icone15 from "../../../Icons/shopping-bag.png";
import icone16 from "../../../Icons/sunglasses.png";
import icone17 from "../../../Icons/spotlight.png";
import icone18 from "../../../Icons/watch.png";
import icone19 from "../../../Icons/woman-bag.png";
import icone20 from "../../../Icons/woman-clothes.png";
import icone21 from "../../../Icons/woman-watch.png";
import icone22 from "../../../Icons/cloth.png";

const Categorys = () => {

  const sliderRef = useRef(null)
  const leftBtn = useRef(null);
  const RightBtn = useRef(null);

  useEffect(() => {
    leftBtn.current.addEventListener('click' , () => {
        sliderRef.current.scrollLeft -= 550
    })
    RightBtn.current.addEventListener('click' , () => {
        sliderRef.current.scrollLeft += 550
    })
  }, []);

  return (
    <div className="container">
      <h1 style={{ margin: "15px 0", color: "#66fcf1" }}>Category</h1>
      <section
        className={styles.Categorys}
      >
        <span className={styles.leftBtn} ref={leftBtn}><Unicons.UilAngleLeft /></span>
      <div className={styles.content} ref={sliderRef} >
        <Link to="/all">
          <ItemCategory image={icone1} title="All" />
        </Link>
        <Link to="/smartphones">
          <ItemCategory image={icone2} title="SmartPhones" />
        </Link>
        <Link to="/automotive">
          <ItemCategory image={icone3} title="Automotive" />
        </Link>
        <Link to="/tops">
          <ItemCategory image={icone4} title="Tops" />
        </Link>
        <Link to="/decoration">
          <ItemCategory image={icone5} title="Decoration" />
        </Link>
        <Link to="/fragrances">
          <ItemCategory image={icone6} title="Fragrances" />
        </Link>
        <Link to="/furniture">
          <ItemCategory image={icone7} title="Furniture" />
        </Link>
        <Link to="/womensshoes">
          <ItemCategory image={icone8} title="Shoes" />
        </Link>
        <Link to="/jewellery">
          <ItemCategory image={icone9} title="Jewellery" />
        </Link>
        <Link to="/laptops">
          <ItemCategory image={icone10} title="LapTops" />
        </Link>
        <Link to="/motorcycle">
          <ItemCategory image={icone11} title="Motorcycle" />
        </Link>
        <Link to="/skincare">
          <ItemCategory image={icone12} title="Skincare" />
        </Link>
        <Link to="/shoes">
          <ItemCategory image={icone13} title="Shoes" />
        </Link>
        <Link to="/groceries">
          <ItemCategory image={icone15} title="Groceries" />
        </Link>
        <Link to="/sunglasses">
          <ItemCategory image={icone16} title="Sunglasses" />
        </Link>
        <Link to="/lighting">
          <ItemCategory image={icone17} title="Lighting" />
        </Link>
        <Link to="/watches">
          <ItemCategory image={icone18} title="Watches" />
        </Link>
        <Link to="/bags">
          <ItemCategory image={icone19} title="Bags" />
        </Link>
        <Link to="/dresses">
          <ItemCategory image={icone20} title="Dresses" />
        </Link>
        <Link to="/womenswatches">
          <ItemCategory image={icone21} title="Watches" />
        </Link>
        <Link to="/shirts">
          <ItemCategory image={icone22} title="Shirts" />
        </Link>
      </div>
        <span className={styles.rightBtn} ref={RightBtn}><Unicons.UilAngleRight /></span>
      </section>
    </div>
  );
};

export default Categorys;
