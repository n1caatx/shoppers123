import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Navigations</h3>
          <div className={styles.navigationGrid}>
            <ul className={styles.links}>
              <li>Sell online</li>
              <li>Features</li>
              <li>Shopping cart</li>
            </ul>
            <ul className={styles.links}>
              <li>Store builder</li>
              <li>Mobile commerce</li>
              <li>Dropshipping</li>
            </ul>
            <ul className={styles.links}>
              <li>Website development</li>
              <li>Point of sale</li>
              <li>Hardware</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Promo</h3>
          <div className={styles.promo}>
            <img
              src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
              alt="Promo Shoes"
              className={styles.promoImage}
            />
            <div>
              <p className={styles.promoTitle}>
                <strong>Finding Your Perfect Shoes</strong>
              </p>
              <p className={styles.promoDescription}>
                Promo from January 15 — 25, 2019
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Contact Info</h3>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p>+2 392 3929 210</p>
          <p>emailaddress@domain.com</p>
        </div>

        <div className={styles.section}>
          <h3>Subscribe</h3>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright ©2024 All rights reserved | This template is made with 💜 by
        Colorlib
      </p>
    </footer>
  );
};

export default Footer;
