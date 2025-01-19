import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Log} from "../models/Log.ts";

export interface LogState {
    logs:Log[];
}

const initialState:LogState = {
    logs:[],
};

const LogsSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        //add Log
        addLog(state, action: PayloadAction<Log>){
            state.logs.push(action.payload);
        },

        //update Log
        updateLog(state,action: PayloadAction<Log>){
            const index = state.logs.findIndex(
                (log) => log.logCode === action.payload.logCode
            );
            if (index !== -1) {
                state.logs[index] = action.payload;
            }
        },

        //delete Log
        deleteLog(state,action: PayloadAction<string>){
            state.logs = state.logs.filter((log) => log.logCode !== action.payload);
        },
    },
});

export const {addLog,updateLog,deleteLog} = LogsSlice.actions;
export default LogsSlice.reducer;