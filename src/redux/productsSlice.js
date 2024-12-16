const initialState = {
    products: [],
  };
  
  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload;
      },
      addToBasket: (state, action) => {
      },
      removeFromBasket: (state, action) => {
      },
    },
  });
  
  export const { setProducts, addToBasket, removeFromBasket } = productsSlice.actions;
  export default productsSlice.reducer;
  