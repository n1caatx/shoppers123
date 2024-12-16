import React from "react";
import styles from "./Header.module.css";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Header = () => {
  return (
    <>
      <header className={styles.headerTop}>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.logo}>
          <a href="/">S H O P P E R S</a>
        </div>
        <div className={styles.icons}>
          <Link to="/profile"><FaUser size={20} /></Link> {/* Use Link component */}
          <Link to="/wishlist">
            <FaHeart size={20} />
            <span className={styles.wishlistText}></span>
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={20} />
            <span className={styles.cartText}></span>
            <span className={styles.cartCount}>2</span>
          </Link>
        </div>
      </header>

      <div className={styles.menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/new-arrivals">New Arrivals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
