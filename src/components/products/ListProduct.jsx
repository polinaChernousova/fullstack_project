import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/productContext";
import CardProduct from "./CardProduct";
import { useSearchParams } from "react-router-dom";
import FilterBlock from "./FilterBlock";

const ListProduct = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      ProductsList
      <br />
      <input type="text" placeholder="live search...." />
      <br />
      {/* <FilterBlock /> */}
      {products.map((item) => (
        <CardProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListProduct;
