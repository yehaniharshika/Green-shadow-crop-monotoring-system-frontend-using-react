import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        addVehicle:(state: VehicleState, action: PayloadAction<Vehicle>) => {
            state.vehicles.push(action.payload);
        },

        updateVehicle:(state: VehicleState, action: PayloadAction<Vehicle>) => {
            const index = state.vehicles.findIndex(
                (vehicle) => vehicle.vehicleCode === action.payload.vehicleCode
            );
            if (index !== -1) {
                state.vehicles[index] = action.payload;
            }
        },

        deleteVehicle(state: VehicleState, action: PayloadAction<string>) {
            state.vehicles = state.vehicles.filter((vehicle) => vehicle.vehicleCode !== action.payload);
        },
    },
});

export const {addVehicle,updateVehicle,deleteVehicle} = VehicleSlice.actions;

export default VehicleSlice.reducer;