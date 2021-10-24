import { applyMiddleware, createStore } from 'redux';
import { connect } from 'react-redux';
import reducers from "./reducers";
import actions from "./actionCreators"

import thunk from 'redux-thunk';



const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export const ac = actions;
export default store;

function mapDispatchToProps(dispatch) {
  return {actions: actions(dispatch)}
}

export const storeConnector = (comp, data) => {
  const mapStateToProps = (state, ownProps) => {
  let usedFields = Object.keys(data).reduce((accumulator, currentValue)=>{
    if(data[currentValue] !== "all"){
      const partialState = data[currentValue].reduce((acc, curValue) => {
        acc[curValue] = state[currentValue][curValue];
        return acc;
      }, {});
      return {...accumulator, ...partialState}
    } else {
      return {...accumulator, ...state[currentValue]}
    }
  },{} )
  return {...usedFields, ...ownProps}
  }
  return connect(mapStateToProps, mapDispatchToProps)(comp);
}

export function dispatcher(type, payload) {
  return {
    type,
    ...payload
  }
}