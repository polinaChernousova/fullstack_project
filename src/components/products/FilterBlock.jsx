import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContext";

export default function FilterBlock() {
  const { getCategories } = useContext(productContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories) {
      setCategories(categories);
    }
  }, [categories]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category) {
      getCategories(category);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      <select
        name="category"
        id=""
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
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
