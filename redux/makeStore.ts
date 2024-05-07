import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer/userReducer";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
  });

export type RootState = ReturnType<typeof makeStore>["getState"];
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
