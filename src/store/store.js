import { createStore,applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

import { persistReducer,persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

// ....middle ware setup
const myMiddleWare = (store) => (next) => (action) =>{
if (!action.type){
    return next(action)
}

console.log("type" , action.type)
console.log("paylod" , action.payload)
console.log("before dispatch" , store.getState())

next(action)

console.log("after dispatch" , store.getState())
}

const middleWares = [myMiddleWare]
const composesEnhancer = compose(applyMiddleware(...middleWares))
// .................


const PersistConfig = {
key:'root',
storage,
whitelist: ['cartItems'] 
}

const persistedReducer = persistReducer(PersistConfig,rootReducer)
export const store = createStore(persistedReducer,undefined,composesEnhancer)

export const persistor = persistStore(store)