const initState = {
  productsIds: [],
  countOfEachItemById: {},
}

const productsReducer = (state = initState, action) => {
  const handlers = {
    'ADD_PRODUCT_TO_CART': () => {
      const newState = JSON.parse(JSON.stringify(state));
      const id = action.productId;
      if (state.productsIds.includes(id)) {
        newState.countOfEachItemById[id] += 1;
      } else {
        newState.countOfEachItemById[id] = 1;
        newState.productsIds.push(id);
      }
      return newState;
    },
    'REMOVE_PRODUCT_FROM_CART': () => {
      const newState = JSON.parse(JSON.stringify(state));
      const id = action.productId;
      delete newState.countOfEachItemById[id];
      newState.productsIds = newState.productsIds.filter(el => el !== id);
      return newState;
    }
  }
  if (!handlers[action.type]) {
    return state;
  }
  return handlers[action.type]();
};

export default productsReducer;