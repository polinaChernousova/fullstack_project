import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/productContext";

const CardProduct = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productContext);
  return (
    <ul style={{ listStyleType: "none" }}>
      <li>
        <strong>Title: </strong> {item.title};
      </li>
      <li>
        <strong>Price: </strong>
        {item.price}$;
      </li>
      <li>Category: {item.category.title}</li>
      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>
    </ul>
  );
};

export default CardProduct;
