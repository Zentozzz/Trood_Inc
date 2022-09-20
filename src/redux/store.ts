import { configureStore } from "@reduxjs/toolkit";

import bgColorSlice from "./slice/bgColorSlice";

export const store = configureStore({
  reducer: {
    bgColorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
