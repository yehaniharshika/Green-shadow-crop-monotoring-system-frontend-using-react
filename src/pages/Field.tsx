import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {addCustomer} from "../reducers/CustomerSlice.ts";
import {useState} from "react";


const Field = () => {
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const dispatch = useDispatch();

    const handleAddCustomer = () => {
        dispatch(addCustomer({ name, email, phone }));
        setName('');
        setEmail('');
        setPhone('');
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mx-auto bg-red-400 p-4">
                        <h1 className="text-xl font-bold">Add Customer</h1>
                        <input className="block p-2 border rounded my-2" placeholder="Name" value={name}
                               onChange={e => setName(e.target.value)}/>
                        <input className="block p-2 border rounded my-2" placeholder="Email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input className="block p-2 border rounded my-2" placeholder="Phone" value={phone}
                               onChange={e => setPhone(e.target.value)}/>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddCustomer}>Add</button>
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddCustomer}>update</button>
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddCustomer}>delete</button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>


    );
};

export default AddCustomer;
