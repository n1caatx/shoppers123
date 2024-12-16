import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Basket</h1>
      {basket.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {basket.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;
