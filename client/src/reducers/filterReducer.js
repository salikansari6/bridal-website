import axios from "axios";
// import {productList} from '../utils/'
var productList = [];
axios.get("https://biyahspecials.herokuapp.com/products").then((res) => {
  productList = [...res.data];
});

const filterReducer = (state = productList, action) => {
  switch (action.type) {
    case "DO_FILTER":
      return [
        ...productList.filter(
          (product) => product.size === action.payload.name
        ),
        ...productList.filter(
          (product) => product.color === action.payload.name
        ),
        ...productList.filter(
          (product) => product.style === action.payload.name
        ),
        ...productList.filter(
          (product) => product.fabric === action.payload.name
        ),
        ...productList.filter((product) => product.price > action.payload.name),
        ...productList.filter(
          (product) => product.work === action.payload.name
        ),
      ];

    case "CLEAR_FILTERS":
      return productList;

    default:
      return productList;
  }
};

export default filterReducer;
