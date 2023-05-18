import React, { useContext } from "react";
import { productContext } from "../../context/productContext";

export default function FilterBlock() {
  const { getCategories } = useContext(productContext);

  return (
    <div>
      <select name="category" id="" defaultValue="all">
        <option value="all">All</option>
        <option value="headphones">Headphones</option>
        <option value="laptops">Laptops</option>
        <option value="electronics" control>
          Electronic
        </option>
      </select>
    </div>
  );
}
