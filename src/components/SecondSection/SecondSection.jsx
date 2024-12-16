import React from 'react';
import { FaShippingFast, FaUndo, FaHeadset } from 'react-icons/fa';
import styles from './SecondSection.module.css';

const SecondSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <FaShippingFast className={styles.icon} />
        <div>
          <h3>FREE SHIPPING</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
      </div>
      <div className={styles.item}>
        <FaUndo className={styles.icon} />
        <div>
          <h3>FREE RETURNS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
      </div>
      <div className={styles.item}>
        <FaHeadset className={styles.icon} />
        <div>
          <h3>CUSTOMER SUPPORT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
