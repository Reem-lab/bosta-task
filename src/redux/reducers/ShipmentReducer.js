import { LOAD_SHIPMENTS } from '../actions/ShipmentsAction';

const initialState = {
  success: true,
  data: {},
  loaded: false
};

const ShipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHIPMENTS:
      return state = action.payload;

    default:
      return state;
  }
};

export default ShipmentReducer;