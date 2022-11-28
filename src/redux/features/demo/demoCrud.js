import axios from "axios";
import config from "../../../config/config";

export const getProductData = () => {
  return axios.get(config.default.getAllProduct);
};

export const addProductCrud = (payload) => {
  return axios.post(config.default.addProduct,  payload );
};