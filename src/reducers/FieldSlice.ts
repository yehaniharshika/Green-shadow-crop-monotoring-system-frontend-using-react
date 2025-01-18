import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Field} from "../models/Field.ts";

export interface FieldState {
    fields: Field[]; // List of fields
}

const initialState: FieldState = {
    fields: [], // Initial state with no fields
};

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        // Add a new field
        addField(state, action: PayloadAction<Field>) {
            state.fields.push(action.payload);
        },
        // Update an existing field
        updateField(state, action: PayloadAction<Field>) {
            const index = state.fields.findIndex(
                (field) => field.fieldCode === action.payload.fieldCode
            );
            if (index !== -1) {
                state.fields[index] = action.payload;
            }
        },
        // Delete a field
        deleteField(state, action: PayloadAction<string>) {
            state.fields = state.fields.filter((field) => field.fieldCode !== action.payload
            );
        },
    },
});

export const { addField, updateField, deleteField } = fieldSlice.actions;

export default fieldSlice.reducer;
