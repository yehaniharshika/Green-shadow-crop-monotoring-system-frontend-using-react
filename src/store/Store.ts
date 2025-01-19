import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducers/AuthSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";


const store = configureStore({
    reducer: {
        auth: AuthSlice,
        fields: FieldSlice,
        staff: StaffSlice,
        crops: CropSlice,
        equipments: EquipmentSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
