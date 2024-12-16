import React from 'react';
import styles from './CollectionCards.module.css';

const CollectionCards = () => {
  const collections = [
    {
      id: 1,
      title: 'Women',
      imgSrc: 'https://preview.colorlib.com/theme/shoppers/images/women.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Children',
      imgSrc: 'https://preview.colorlib.com/theme/shoppers/images/children.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Men',
      imgSrc: 'https://preview.colorlib.com/theme/shoppers/images/men.jpg', // Replace with actual image URL
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {collections.map((collection) => (
        <div key={collection.id} className={styles.card}>
          <img src={collection.imgSrc} alt={collection.title} className={styles.image} />
          <div className={styles.overlay}>
            <p className={styles.collectionText}>COLLECTIONS</p>
            <h3 className={styles.title}>{collection.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionCards;
