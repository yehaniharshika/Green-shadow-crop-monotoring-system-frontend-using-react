import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthState, User} from "../types/authTypes.ts";

const initialState:AuthState = {
    user: null ,
    isAuthenticated: false,
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state: AuthState) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;