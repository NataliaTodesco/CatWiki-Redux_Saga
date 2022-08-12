import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getGatos(action) {
  try {
    let { data } = yield axios.get("https://api.thecatapi.com/v1/breeds");
    yield put({
      type: "GET_GATOS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    yield put({
      type: "GET_GATOS_ERROR",
      payload: error.response.message,
    });
  }
}

function* getDetails(action) {
  try {
    let imagenes = yield axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=" +
        action.payload.id
    );
    
    let tipo = action.payload;
    tipo = Object.assign({}, tipo, imagenes)

    yield put({
      type: "GET_DETAILS_SUCCESS",
      payload: tipo,
    });
  } catch (error) {
    yield put({
      type: "GET_DETAILS_ERROR",
      payload: error,
    });
  }
}

export default function* mySaga() {
  yield takeEvery("GET_GATOS", getGatos);
  yield takeEvery("GET_DETAILS", getDetails);
}
