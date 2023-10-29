import { configureStore } from "@reduxjs/toolkit";
import centralDataSlice from "./slice/centralDataSlice";

export const store = configureStore({
    reducer: {
        centralDataSlice: centralDataSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch