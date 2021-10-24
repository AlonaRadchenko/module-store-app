import {bindActionCreators} from "redux"
import * as productsActions from "./productsActions";
import * as cartActions from "./cartActions";

const actions = (dispatch) => ({
  products: bindActionCreators(productsActions, dispatch),
  cart: bindActionCreators(cartActions, dispatch),
});

export default actions;