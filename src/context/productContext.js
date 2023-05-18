import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  categories: [],
  editProduct: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return { ...state, products: action.payload.results };
    }
    case "GET_ONE_PRODUCT": {
      return { ...state, oneProduct: action.payload };
    }
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "EDIT_PRODUCT": {
      return { ...state, editProduct: action.payload };
    }
    default:
      return state;
  }
};

const API = "http://34.173.115.25/api/v1";

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      // config
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/products/`, newProduct, config);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function getProducts() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const url = `${API}/products${window.location.search}`;

      const res = await axios(url, config);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const res = await axios(`${API}/category/list/`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(id) {
    try {
      const res = await axios(`${API}/products/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(newProduct, id) {
    try {
      // conf
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.patch(
        `${API}/products/${id}/`,
        newProduct,
        config
      );
      dispatch({
        type: "EDIT_PRODUCT",
        payload: res.data,
      });
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <productContext.Provider
      value={{
        createProduct,
        getProducts,
        getOneProduct,
        getCategories,
        editProduct,
        deleteProduct,
        categories: state.categories,
        products: state.products,
        oneProduct: state.oneProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContext;
