import { createStore, applyMiddleware } from "redux";


import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);
// persisted version of our store

export default { store, persistor };