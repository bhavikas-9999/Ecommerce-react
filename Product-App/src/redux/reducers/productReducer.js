import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: []
}

export const productReducer =(state=initialState, action) =>{
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
          return {
            ...state,
            products: action.payload,
          };
        default:
          return state;
        }
}

export const selectedProductReducer = (state=initialState, action) =>{
  switch (action.type) {
      case ActionTypes.SELECTED_PRODUCT:
        return {
          ...state,
          ...action.payload,
        };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};  
      default:
        return state;
      };
}

