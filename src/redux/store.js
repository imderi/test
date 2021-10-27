import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./sagas/rootSaga";

import taskSlice from "./slices/taskSlice";
import contactSlice from "./slices/contactSlice";

const sagaMiddleWare = createSagaMiddleware();

const reducer = combineReducers({
  tasks: taskSlice,
  contact: contactSlice,
});

export const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare],
});

sagaMiddleWare.run(watcherSaga);
