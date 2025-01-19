import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../models/Vehicle.ts";

export interface VehicleState{
    vehicles: Vehicle[];
}

const initialState: VehicleState = {
    vehicles: []
};

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {

    }
});

export default VehicleSlice.reducer;