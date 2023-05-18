import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AddProduct from "./components/products/AddProduct";
import ListProduct from "./components/products/ListProduct";
import EditProduct from "./components/products/EditProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<ListProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default Routing;
