import AxiosBase from '../../Api/axiosBase';

export const LOAD_SHIPMENTS = 'LOAD_SHIPMENTS';

export const loadShipments = (payload) => ({
  type: LOAD_SHIPMENTS,
  payload,
});

async function fetchData(trackingNumber) {
  const response = AxiosBase.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}?lang=en`)
    .then((response) => response.data)
    .catch((error) => error);
  return response;
}

export const displayShipment = (trackingNum) => async (dispatch) => {
  const shipmentsObj = await fetchData(trackingNum);
  if (shipmentsObj && shipmentsObj.response?.status === 404) {
    dispatch(loadShipments({
      success: false,
      message: shipmentsObj.response.data.error,
      loaded: true,
    }));
    return;
  }

  const shipmentsTemp = {
    provider: shipmentsObj.provider,
    trackingNumber: shipmentsObj.TrackingNumber,
    promisedDate: shipmentsObj.PromisedDate,
    state: shipmentsObj.CurrentStatus?.state,
    timestamp: shipmentsObj.CurrentStatus?.timestamp,
  };

  dispatch(loadShipments({
    success: true,
    data: shipmentsTemp,
    loaded: true,
  }));
};
