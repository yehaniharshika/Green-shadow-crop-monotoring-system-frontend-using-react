import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../models/Staff.ts";

export interface StaffState {
    staff: Staff[];
}

const initialState: StaffState = {
    staff: [],
};

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        // Add a new staff
        addStaff(state, action: PayloadAction<Staff>) {
            state.staff.push(action.payload);
        },

        // Update an existing staff
        updateStaff(state, action: PayloadAction<Staff>) {
            const index = state.staff.findIndex(
                (staff) => staff.staffId === action.payload.staffId
            );

            if (index !== -1) {
                state.staff[index] = action.payload;
            }
        },

        // Delete a staff
        deleteStaff(state, action: PayloadAction<string>) {
            state.staff = state.staff.filter(
                (staff) => staff.staffId !== action.payload
            );
        },

        // Get staff by ID
        getStaffById(state, action: PayloadAction<string>) {
            state.staff.find((staff) => staff.staffId === action.payload);
        },
    },
});

export const { addStaff, updateStaff, deleteStaff, getStaffById } =
    staffSlice.actions;

export default staffSlice.reducer;
