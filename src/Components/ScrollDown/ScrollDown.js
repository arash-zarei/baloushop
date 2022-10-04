import React from "react";

// Styles
import styles from './ScrollDown.module.css'

const ScrollDown = () => {
  return (
    <div class={`${styles.mouse_scroll}`}>
      <div class={`${styles.mouse}`}>
        <div class={`${styles.wheel}`}></div>
      </div>
      <div>
        <span class={`${styles.m_scroll_arrows} ${styles.unu}`}></span>
        <span class={`${styles.m_scroll_arrows} ${styles.doi}`}></span>
        <span class={`${styles.m_scroll_arrows} ${styles.trei}`}></span>
      </div>
    </div>
  );
};

export default ScrollDown;
