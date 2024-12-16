import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist yet.</p>
      ) : (
        <ul>
          {wishlist.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
