import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setCurrentPage, addToBasket, addToWishlist } from "../../redux/store";
import axios from "axios";
import styles from "./Featured.module.css";

const Featured = () => {
  const dispatch = useDispatch();
  const { products, currentPage, itemsPerPage } = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch the data from API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("API response:", response.data); // Log the API response
        dispatch(setProducts(response.data)); // Dispatch to Redux store
      })
      .catch((error) => console.error("Error fetching products", error));
  }, [dispatch]);

  // Ensure products is always an array before accessing it
  const productList = Array.isArray(products) ? products : [];

  // Log products and check if they are correctly populated
  console.log("Products in state:", productList);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.titleBorder}></div>
      </div>
      <div className={styles.grid}>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className={styles.card} key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <h3 className={styles.name}>{product.title}</h3>
              <p className={styles.price}>${product.price.toFixed(2)}</p>
              <button
                className={styles.addToCartButton}
                onClick={() => dispatch(addToBasket(product))}
              >
                Add to Basket
              </button>
              <button
                className={styles.addToWishlistButton}
                onClick={() => dispatch(addToWishlist(product))}
              >
                Add to Wishlist
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div className={styles.paginationWrapper}>
        <button
          className={styles.paginationButton}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.paginationButton}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Featured;
