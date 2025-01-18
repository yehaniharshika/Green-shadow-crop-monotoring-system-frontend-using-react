import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateCustomer} from "../reducers/CustomerSlice.ts";

const UpdateCustomer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleUpdateCustomer = () => {
        dispatch(updateCustomer({name, email, phone}));
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Update Customer</h1>
            <input className="block p-2 border rounded my-2" placeholder="Name" value={name}
                   onChange={e => setName(e.target.value)}/>
            <input className="block p-2 border rounded my-2" placeholder="Email" value={email}
                   onChange={e => setEmail(e.target.value)}/>
            <input className="block p-2 border rounded my-2" placeholder="Phone" value={phone}
                   onChange={e => setPhone(e.target.value)}/>
            <button className="bg-green-500 text-white p-2 rounded" onClick={handleUpdateCustomer}>Update Customer
            </button>
        </div>
    );
};

export default UpdateCustomer;



