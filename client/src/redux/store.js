import { legacy_createStore } from "redux";
import { authReducer } from "./auth/reducer";

export const store=legacy_createStore(authReducer)