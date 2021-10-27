import { takeLatest } from "redux-saga/effects";
import { handleGetContact } from "./handlers/contact";
import { getContact } from "../slices/contactSlice";

export function* watcherSaga() {
  yield takeLatest(getContact.type, handleGetContact);
}
