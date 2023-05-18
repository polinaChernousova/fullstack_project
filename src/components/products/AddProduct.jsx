import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct, categories, getCategories } =
    useContext(productContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", desc);
    newProduct.append("price", price);
    newProduct.append("category", category);
    createProduct(newProduct, navigate);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Choose category...</option>
        {categories?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>

      <button onClick={handleSave}>Save Product</button>
    </div>
  );
};

export default AddProduct;
