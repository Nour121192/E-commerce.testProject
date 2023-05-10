import { createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger]
const composesEnhancer = compose(applyMiddleware(...middleWares))
export const store = createStore(rootReducer,undefined,composesEnhancer)