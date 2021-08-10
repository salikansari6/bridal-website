import axios from "axios";

export const doFilter = (filter) => {
  return {
    type: "DO_FILTER",
    payload: {
      name: filter,
    },
  };
};

export const clearFilters = () => {
  return {
    type: "CLEAR_FILTERS",
  };
};

export const addToHistory = (product) => {
  return {
    type: "ADD_TO_HISTORY",
    payload: {
      product: product,
    },
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product: product,
    },
  };
};

export const decreaseFromCart = (product) => {
  return {
    type: "DECREASE_FROM_CART",
    payload: {
      product: product,
    },
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      product: product,
    },
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:4000/products");

    dispatch({ type: "FETCH_PRODUCTS", payload: data });
  };
};
