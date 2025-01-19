import {Navigation} from "../components/Navigation.tsx";
import {Col, Container, Form, Row, Table} from "react-bootstrap";

import Button from "react-bootstrap/Button";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {addEquipment, deleteEquipment, updateEquipment} from "../reducers/EquipmentSlice.ts";

const EquipmentSection = () => {
    const [equipmentId, setEquipmentId] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [equipmentType, setEquipmentType] = useState("");
    const [status, setStatus] = useState("");
    const [fieldCode, setFieldCode] = useState('');
    const [staffId, setStaffId] = useState("");

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const equipments = useSelector((state : RootState) => state.equipments.equipments);

    //add equipments
    const handleAddEquipment = () => {
        dispatch(addEquipment({equipmentId,equipmentName,equipmentType,status,fieldCode,staffId})
        )
        setEquipmentId('');
        setEquipmentName('');
        setEquipmentType('');
        setStatus('');
        setFieldCode('');
        setStaffId('');
        handleClose();
    }

    //update equipment
    const handleUpdateEquipment = () => {
        dispatch(updateEquipment({equipmentId,equipmentName,equipmentType,status,fieldCode,staffId})
        );
        setEquipmentId('');
        setEquipmentName('');
        setEquipmentType('');
        setStatus('');
        setFieldCode('');
        setStaffId('');
        handleClose();
    }

    //delete equipment
    const handleDeleteEquipment = () => {
        dispatch(deleteEquipment(equipmentId));
        setEquipmentId('');
        handleClose();
    }
    return (
        <div className="flex overflow-hidden bg-emerald-200">
            <Navigation/>
            <div className="flex-1 p-5">
                <Container fluid>
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <div className="bg-red-800 p-3 rounded top-50">
                                <Container fluid>
                                    <Row className="align-items-center">
                                        <h1 className="font-bold text-2xl text-neutral-100"
                                            style={{fontFamily: "'Ubuntu', sans-serif"}}>
                                            Equipment Management
                                        </h1>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="primary" onClick={handleShow} className="h-1/5 max-w-40 font-bold"
                            style={{fontFamily: "'Ubuntu', sans-serif"}}>
                        + Add Equipment
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Equipment
                                Details Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-blue-300">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Equipment
                                        Id</Form.Label>
                                    <Form.Control className="border-2 border-slate-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={equipmentId} onChange={e => setEquipmentId(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Equipment
                                        Name</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={equipmentName}
                                                  onChange={e => setEquipmentName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold"
                                                style={{fontFamily: "'Ubuntu', sans-serif"}}>Equipment Type</Form.Label>
                                    <Form.Select className="border-2 border-slate-700"
                                                 style={{fontFamily: "'Ubuntu', sans-serif"}} value={equipmentType}
                                                 onChange={e => setEquipmentType(e.target.value)}>
                                        <option value="">Select type</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Mechanical">Mechanical</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold"
                                                style={{fontFamily: "'Ubuntu', sans-serif"}}>Status</Form.Label>
                                    <Form.Select className="border-2 border-slate-700"
                                                 style={{fontFamily: "'Ubuntu', sans-serif"}} value={status}
                                                 onChange={e => setStatus(e.target.value)}>
                                        <option value="">Select status</option>
                                        <option value="Available">Available</option>
                                        <option value="Out of Service">Out of Service</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="font-bold"
                                                style={{fontFamily: "'Ubuntu', sans-serif"}}>Field Code</Form.Label>
                                    <Form.Select className="border-2 border-slate-700"
                                                 aria-label="Default select example">
                                        <option>Field Code</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Staff
                                        Id</Form.Label>
                                    <Form.Select className="border-2 border-slate-700"
                                                 aria-label="Default select example">
                                        <option>Staff Id</option>
                                    </Form.Select>
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="font-bold" variant="primary" onClick={handleAddEquipment}>Save</Button>
                            <Button className="font-bold" variant="success" onClick={handleUpdateEquipment}>Update</Button>
                            <Button className="font-bold" variant="danger" onClick={handleDeleteEquipment}>Delete</Button>
                            <Button className="font-bold" variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <br/><br/>
                    <div className="overflow-x-auto overflow-y-auto table-container">
                        <Table striped bordered hover responsive className="custom-table">
                            <thead>
                            <tr>
                                <th>Equipment Id</th>
                                <th>Equipment Name</th>
                                <th>Equipment Type</th>
                                <th>status</th>
                                <th>Field Code</th>
                                <th>Staff Id</th>
                            </tr>
                            </thead>
                            <tbody>
                            {equipments.map((equipment, index) => (
                                <tr key={index}>
                                    <td>{equipment.equipmentId}</td>
                                    <td>{equipment.equipmentName}</td>
                                    <td>{equipment.equipmentType}</td>
                                    <td>{equipment.status}</td>
                                    <td>{equipment.fieldCode}</td>
                                    <td>{equipment.staffId}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>

        </div>
    )
};

export default EquipmentSection;