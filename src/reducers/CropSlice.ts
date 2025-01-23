import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Crop} from "../models/Crop.ts";

export interface CropState {
    crops: Crop[];
}

// export const initialState: Crop[] =[];
const initialState: CropState = {
    crops: [],
}

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {

        addCrop: (state: CropState, action: PayloadAction<Crop>) => {
            state.crops.push(action.payload);
        },

        updateCrop(state, action: PayloadAction<Crop>) {
            const index = state.crops.findIndex(
                (crop) => crop.cropCode === action.payload.cropCode
            );
            if (index !== -1) {
                state.crops[index] = action.payload;
            }
        },

        deleteCrop(state, action: PayloadAction<string>) {
            state.crops = state.crops.filter((crop) => crop.cropCode !== action.payload);
        },
    },
});
export const {addCrop,updateCrop,deleteCrop} = cropSlice.actions;

export default cropSlice.reducer;