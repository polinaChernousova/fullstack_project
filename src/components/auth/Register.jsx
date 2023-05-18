import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
  }, []);

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    handleRegister(formData, navigate);
  }

  return (
    <div>
      <h2>Register</h2>
      {error ? <h2>{error}</h2> : null}
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
      <input
        type="text"
        placeholder="Password confirmation"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <button onClick={handleSave}>Register</button>
    </div>
  );
};

export default Register;
