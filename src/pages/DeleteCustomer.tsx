import { useDispatch } from 'react-redux';
import {deleteCustomer} from "../reducers/CustomerSlice.ts";
import {useState} from "react";


const DeleteCustomer = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleDeleteCustomer = () => {
        dispatch(deleteCustomer(email));
        setEmail('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Delete Customer</h1>
            <input className="block p-2 border rounded my-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="bg-red-500 text-white p-2 rounded" onClick={handleDeleteCustomer}>Delete Customer</button>
        </div>
    );
};

export default DeleteCustomer;
