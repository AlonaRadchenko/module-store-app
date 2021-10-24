export const removeItemFromCart = (id) => {
  return function (dispatch) {
    dispatch({ type: "REMOVE_PRODUCT_FROM_CART", productId: id });
  }
}