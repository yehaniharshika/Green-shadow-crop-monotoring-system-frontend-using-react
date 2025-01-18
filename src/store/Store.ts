import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducers/AuthSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        fields: FieldSlice,
        staff: StaffSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
