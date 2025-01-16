/*
import {Customer} from "../models/Customer.ts";

const initialState: Customer[] = [];
export function customerReducer(state = initialState, action: { type: string; payload?: Customer }) {
    switch (action.type) {
        case 'ADD_CUSTOMER':
            return [...state, action.payload!];
        case 'REMOVE_CUSTOMER':
            return state.filter((customer) => customer.email !== action.payload?.email);
        case 'UPDATE_CUSTOMER':
            return state.map((customer) =>
                customer.email === action.payload?.email ? action.payload : customer
            );
        default:
            return state;
    }
}*/
