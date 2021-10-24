const initState = {
  productsArr: [],
  discountsArr: [],
}

const productsReducer = (state = initState, action) => {
  const handlers = {
    'SET_PRODUCTS': () => {
      return {
        ...state,
        productsArr: action.products,
      }
    }
  }
  if (!handlers[action.type]) {
    return state;
  }
  return handlers[action.type]();
};

export default productsReducer;