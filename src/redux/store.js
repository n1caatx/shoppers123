import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Contains the list of products
  currentPage: 1,
  itemsPerPage: 10,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    addToBasket(state, action) {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },
    addToWishlist(state, action) {
      const product = action.payload;
      state.products.push(product); // Add product to wishlist
    },
    removeFromWishlist(state, action) {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId); // Remove product from wishlist
    },
    removeFromBasket(state, action) {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId); // Remove product from basket
    },
  },
});

export const {
  setProducts,
  setCurrentPage,
  addToBasket,
  addToWishlist,
  removeFromWishlist,
  removeFromBasket,
} = productsSlice.actions;

const store = configureStore({
  reducer: productsSlice.reducer,
});

export default store;
