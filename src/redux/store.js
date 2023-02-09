import { createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shipmentsReducer from './reducers/ShipmentReducer';
import thunk from 'redux-thunk';



const store = createStore(
  shipmentsReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;