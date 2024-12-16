import React from 'react'
import styles from './FirstSection.module.css'

const FirstSection = () => {
  return (
    <div className={styles.FirstSection}>
      <img
        src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
        alt="Shoes"
        className={styles.heroImage}
      />
      <div className={styles.textOverlay}>
        <h1>Finding Your Perfect Shoes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default FirstSection
