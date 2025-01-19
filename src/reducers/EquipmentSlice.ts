import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Equipment} from "../models/Equipment.ts";


export interface EquipmentState {
    equipments: Equipment[];
}

const initialState: EquipmentState = {
    equipments: []
};

const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment:(state: EquipmentState, action: PayloadAction<Equipment>) => {
            state.equipments.push(action.payload);
        },

        updateEquipment:(state: EquipmentState, action: PayloadAction<Equipment>) => {
            const index = state.equipments.findIndex(
                (equipment) => equipment.equipmentId === action.payload.equipmentId
            );
            if (index !== -1) {
                state.equipments[index] = action.payload;
            }
        },

        deleteEquipment(state: EquipmentState, action: PayloadAction<string>) {
            state.equipments = state.equipments.filter((equipment) => equipment.equipmentId !== action.payload);
        },
    },
});

export const {addEquipment, updateEquipment,deleteEquipment} = EquipmentSlice.actions;

export default EquipmentSlice.reducer;