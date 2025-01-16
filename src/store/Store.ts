import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "../reducers/CustomerSlice.ts";
import AuthSlice from "../reducers/AuthSlice.ts";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        customers: CustomerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
