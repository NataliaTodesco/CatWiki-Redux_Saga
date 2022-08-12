export const DATA_DEFAULT = {
  array: [],
  fetching: false,
  current: {},
};
export const GET_GATOS = "GET_GATOS";
export const GET_GATOS_SUCCESS = "GET_GATOS_SUCCESS";
export const GET_GATOS_ERROR = "GET_GATOS_ERROR";
export const GET_DETAILS = "GET_DETAILS";
export const GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS";
export const GET_DETAILS_ERROR = "GET_DETAILS_ERROR";

export const reducerGatos = (state = DATA_DEFAULT, action) => {
  switch (action.type) {
    case GET_GATOS:
      return { ...state, fetching: true };
    case GET_GATOS_SUCCESS:
      return { ...state, fetching: false, array: action.payload };
    case GET_GATOS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case GET_DETAILS:
      return { ...state, fetching: true };
    case GET_DETAILS_SUCCESS:
      return { ...state, fetching: false, current: action.payload };
    case GET_DETAILS_ERROR:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

export const getGatosAction = () => ({
  type: GET_GATOS,
});

export const getDetailsAction = (payload) => ({
  type: GET_DETAILS,
  payload,
});
