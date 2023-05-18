import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { productContext } from "../../context/productContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // conntext
  const { getOneProduct, oneProduct, categories, getCategories, editProduct } =
    useContext(productContext);
  // state
  const [product, setProduct] = useState({});

  useEffect(() => {
    getOneProduct(id);
    getCategories();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = new FormData(e.target);
    editProduct(obj, id);
    navigate("/");
  };

  return (
    <>
      {product ? (
        <div>
          <h2>Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={product.title || ""}
              onChange={handleInp}
            />
            <br />
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={product.description || ""}
              onChange={handleInp}
            />
            <br />

            <input
              type="number"
              placeholder="Price"
              name="price"
              value={product.price || ""}
              onChange={handleInp}
            />
            <br />
            <select
              control="true"
              defaultValue={product?.category?.title}
              onChange={handleInp}
              name="category"
            >
              {categories?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <br />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditProduct;
