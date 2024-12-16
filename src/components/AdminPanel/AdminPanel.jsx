import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, setProducts } from "../../redux/store";
import axios from "axios"; // Import axios for API requests

const AdminPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    image: Yup.string().url("Invalid URL").required("Image URL is required"),
  });

  // Fetch products from the API on component mount
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data)); // Dispatch products to Redux store
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [dispatch]);

  // Handle adding a new product
  const handleAddProduct = (values) => {
    const newProduct = {
      id: Date.now(), 
      title: values.title,
      price: values.price,
      image: values.image,
      quantity: 1,
    };

    dispatch(addToBasket(newProduct)); 
    console.log("Product added:", newProduct);
  };

  // Handle removing a product
  const handleRemoveProduct = (productId) => {
    dispatch(removeFromBasket(productId));
    console.log("Product removed:", productId);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <p>Manage your products, wishlist, and basket here.</p>

      {/* Formik form to add products */}
      <Formik
        initialValues={{
          title: "",
          price: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleAddProduct}
      >
        <Form className="product-form">
          <div className="form-group">
            <label htmlFor="title">Product Title</label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Enter product title"
            />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="price">Product Price</label>
            <Field
              type="number"
              id="price"
              name="price"
              placeholder="Enter product price"
            />
            <ErrorMessage name="price" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="image">Product Image URL</label>
            <Field
              type="text"
              id="image"
              name="image"
              placeholder="Enter product image URL"
            />
            <ErrorMessage name="image" component="div" className="error" />
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </Form>
      </Formik>

      <h2>Product List</h2>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div className="product-item" key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
            <div>
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="remove-btn"
              >
                Remove Product
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default AdminPanel;
