import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import Footer from "./components/Footer/Footer";
import CollectionCards from "./components/CollectionCards/CollectionCards";
import BigSale from "./components/BigSale/BigSale";
import Featured from "./components/Featured/Featured";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile"; 
import AdminLogin from "./components/AdminLogin/AdminLogin"; 
import AdminPanel from "./components/AdminPanel/AdminPanel";  // Import AdminPanel

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    axios
      .get("https://672866fd270bd0b9755542b7.mockapi.io/wishlist")
      .then((response) => {
        setWishlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://672866fd270bd0b9755542b7.mockapi.io/cart")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
      });
  }, []);

  const addToCart = (product) => {
    axios
      .post("https://672866fd270bd0b9755542b7.mockapi.io/cart", {
        ...product,
        quantity: 1,
      })
      .then((response) => {
        setCart((prevCart) => [...prevCart, response.data]);
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const addToWishlist = (product) => {
    axios
      .post("https://672866fd270bd0b9755542b7.mockapi.io/wishlist", product)
      .then((response) => {
        setWishlist((prevWishlist) => [...prevWishlist, response.data]);
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
      });
  };

  const removeFromWishlist = (productId) => {
    axios
      .delete(`https://672866fd270bd0b9755542b7.mockapi.io/wishlist/${productId}`)
      .then(() => {
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item.id !== productId)
        );
      })
      .catch((error) => {
        console.error("Error removing from wishlist:", error);
      });
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <FirstSection/>
      <SecondSection/>
      <CollectionCards/>

      <Routes>
        <Route
          path="/"
          element={<Featured addToCart={addToCart} addToWishlist={addToWishlist} />}
        />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/login"
          element={<AdminLogin setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/admin-panel"
          element={loggedIn ? <AdminPanel wishlist={wishlist} cart={cart} /> : <AdminLogin setLoggedIn={setLoggedIn} />}
        />
      </Routes>

      <BigSale />
      <Footer />
    </Router>
  );
}

export default App;
