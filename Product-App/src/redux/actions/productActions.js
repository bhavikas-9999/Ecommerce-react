import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
