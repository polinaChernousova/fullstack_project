import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("polina@gmail.com");
  const [password, setPassword] = useState(123456);
  const navigate = useNavigate();

  function handleAuth() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

  setTimeout(() => {
    handleAuth();
    console.log("robit");
  }, 2000);

  return error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>Login</button>
    </div>
  );
};

export default Login;
