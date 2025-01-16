/*
import {createContext, useReducer, useState} from "react";
import {customerReducer, initialState} from "../reducers/CustomerReducer.tsx";

export const CustomerContext  = createContext();

export function CustomerProvider({children}) {

    // const [customers, setCustomers] = useState<Customer[]>([]);
    const [customers, dispatch] = useReducer(customerReducer, initialState);



    return (
        <CustomerContext.Provider value={[customers, dispatch]}>
            {children}
        </CustomerContext.Provider>
    );
}*/
