import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AuthReducer from './redux/Auth'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import DemoReducer from "./redux/features/demo/demoSlice";

const persistConfig = {
    storage,
    key: "form",
    whitelist: ["userDetail"],
  };
  
// const PeristedLoginReducer = persistReducer(persistConfig, AuthReducer);
  
export const rootReducer = combineReducers({
    auth:AuthReducer,
    demo: DemoReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

// export const persistor = persistStore(store);