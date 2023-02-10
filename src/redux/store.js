import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import shipmentsReducer from './reducers/ShipmentReducer';

const store = createStore(
  shipmentsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
