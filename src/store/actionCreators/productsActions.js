import { productsList } from '../mockedData'

export const getProducts = () => {
  return function (dispatch) {
    return new Promise((resolve) =>
      setTimeout(() => {
        dispatch({ type:"SET_PRODUCTS", products: productsList });
        resolve();
      }, 2000)
    );
  }
}

export const addItemToCart = (id) => {
  return function (dispatch) {
    dispatch({ type:"ADD_PRODUCT_TO_CART", productId: id });
  }
}