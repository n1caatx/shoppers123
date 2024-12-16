import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = () => {
    // Static username and password (mock data)
    if (username === "admin" && password === "admin123") {
      setLoggedIn(true);
      navigate("/admin-panel"); // Navigate to admin panel after successful login
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
