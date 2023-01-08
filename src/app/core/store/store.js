import { configureStore } from "@reduxjs/toolkit";

import { DevTool } from '@hookform/devtools';
import { initialState } from "./initial-state";
import { rootReducer } from "./reducer";
import { authMiddleware } from "../middlewares/auth.middleware";


export const store = configureStore({
  preloadedState: initialState,
  reducer: rootReducer,
  middleware: [authMiddleware],
  DevTool: true,
})