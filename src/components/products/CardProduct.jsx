import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/productContext";

const CardProduct = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);
  return (
    <ul>
      <li>{item.title};</li>
      <li>{item.price}$;</li>
      <li>{item.category.title}</li>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>
    </ul>
  );
};

export default CardProduct;
