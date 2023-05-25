import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";
import CardProduct from "./CardProduct";
import { useSearchParams } from "react-router-dom";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const ListProduct = () => {
  const { products, getProducts, categories, getCategories } =
    useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get("category") || "");

  useEffect(() => {
    getProducts({ id: category });
  }, [category]);

  useEffect(() => {
    setSearchParams(category ? {} : getCategories());
  }, [category]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      ProductsList
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "1200px",
        }}
      >
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel control={<Radio />} label="All" />
          {categories.map((item) => {
            return (
              <FormControlLabel
                key={item.id}
                value={item.id}
                control={<Radio />}
                label={item.title}
              />
            );
          })}
        </RadioGroup>
        {products.map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
