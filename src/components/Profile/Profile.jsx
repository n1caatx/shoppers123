// src/components/Profile/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ loggedIn, setLoggedIn }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      axios
        .get("https://672866fd270bd0b9755542b7.mockapi.io/wishlist")
        .then((response) => {
          setWishlist(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wishlist:", error);
        });
    }
  }, [loggedIn]);

  const handleLogout = () => {
    setLoggedIn(false); // Set loggedIn to false
  };

  if (!loggedIn) {
    return <div>Please log in as an admin to view this page.</div>;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h3>Manage Wishlist</h3>
        {wishlist.length > 0 ? (
          <ul>
            {wishlist.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in the wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
