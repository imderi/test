import { call, put } from "redux-saga/effects";
import { setContact } from "../../slices/contactSlice";
import { requestGetContact } from "../requests/contact";

export function* handleGetContact(action) {
  try {
    const response = yield call(requestGetContact);
    const { data } = response;
    yield put(setContact({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
