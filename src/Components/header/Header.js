import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

// Icon
import * as Unicons from "@iconscout/react-unicons";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  
  const state = useSelector(state => state.cartState)

  return (
    <div className={styles.header}>
      <header className={`container`}>
        <Link to="/" className={styles.title}>Balou Shop</Link>
        <Link to="/cart" className={styles.cartIcon}>
            <Unicons.UilShoppingCartAlt />
            <span>{state.itemsCounter}</span>
        </Link>
      </header>
    </div>
  );
};

export default Header;