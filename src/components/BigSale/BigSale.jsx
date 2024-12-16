import React from "react";
import styles from "./BigSale.module.css"; // Import the CSS module

const BigSale = () => {
  return (
    <div className={styles.cardSection}>
      <div className={styles.cardImage}>
        <img
          src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"
          alt="Clothing Sale"
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>Big Sale!</h3>
        <h2 className={styles.cardSubtitle}>50% less in all items</h2>
        <p className={styles.cardMeta}>
          By <span className={styles.cardAuthor}>Carl Smith</span> • September 3, 2018
        </p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisquam iste
          dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex,
          veniam?
        </p>
        <button className={styles.cardButton}>Shop Now</button>
      </div>
    </div>
  );
};

export default BigSale;
