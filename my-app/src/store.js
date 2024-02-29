import { configureStore } from "@reduxjs/toolkit";

// import { combineReducers, createStore } from "redux";

// import { devToolsEnhancer } from "@redux-devtools/extension";
import { accountReducer } from "./accountSlice";
import { localeReducer } from "./localeSlice";

// const rootReducer = combineReducers({
//   account: accountReducer,
//   locale: localeReducer,
// });

// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: { account: accountReducer, locale: localeReducer },
});

// export const store = createStore(rootReducer, enhancer);
