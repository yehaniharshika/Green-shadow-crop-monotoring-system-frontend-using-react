import { Navigation } from "../components/Navigation.tsx";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store.ts";
import { addVehicle, deleteVehicle, updateVehicle } from "../reducers/VehicleSlice.ts";
import {motion} from "framer-motion";

const VehicleSection = () => {
    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlateNumber, setLicensePlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status, setStatus] = useState("");
    const [remark, setRemark] = useState("");
    const [staffId, setStaffId] = useState("");
    const [staffIds, setStaffIds] = useState<string[]>([]); // To store staff IDs

    const dispatch = useDispatch();

    // Fetch vehicles and staff from Redux store
    const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);
    const staff = useSelector((state: RootState) => state.staff.staff);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Update the staffIds array when staff data changes
    useEffect(() => {
        const staffIdArray = staff.map((s) => s.staffId);
        setStaffIds(staffIdArray);
    }, [staff]);

    const handleAddVehicle = () => {
        dispatch(
            addVehicle({ vehicleCode, licensePlateNumber, vehicleCategory, fuelType, status, remark, staffId })
        );

        setVehicleCode("");
        setLicensePlateNumber("");
        setVehicleCategory("");
        setFuelType("");
        setStatus("");
        setRemark("");
        setStaffId("");
        handleClose();
    };

    const handleUpdateVehicle = () => {
        dispatch(
            updateVehicle({ vehicleCode, licensePlateNumber, vehicleCategory, fuelType, status, remark, staffId })
        );
        setVehicleCode("");
        setLicensePlateNumber("");
        setVehicleCategory("");
        setFuelType("");
        setStatus("");
        setRemark("");
        setStaffId("");
    };

    const handleDeleteVehicle = () => {
        dispatch(deleteVehicle(vehicleCode));
        setVehicleCode("");
        handleClose();
    };

    return (
        <div className="flex overflow-hidden bg-emerald-200">
            <Navigation />
            <div className="flex-1 p-5">
                <Container fluid>
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <motion.div
                                className="bg-teal-900 p-3 rounded top-50"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                                }}
                            >
                                <Container fluid>
                                    <Row className="align-items-center">
                                        <motion.h1
                                            className="font-bold text-2xl text-neutral-100"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                delay: 0.2,
                                                duration: 0.6,
                                                ease: "easeOut",
                                            }}
                                        >
                                            Vehicle Management
                                        </motion.h1>
                                    </Row>
                                </Container>
                            </motion.div>
                        </Col>
                    </Row>
                    <br />
                    <Button
                        variant="primary"
                        onClick={handleShow}
                        className="h-1/5 max-w-40 font-bold"
                        style={{ fontFamily: "'Ubuntu', sans-serif" }}
                    >
                        + Add Vehicle
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                Vehicle Details Form
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-blue-300">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Vehicle
                                        Code</Form.Label>
                                    <Form.Control className="border-2 border-slate-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={vehicleCode} onChange={e => setVehicleCode(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>License
                                        Plate Number</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={licensePlateNumber}
                                                  onChange={e => setLicensePlateNumber(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Vehicle
                                        Category</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={vehicleCategory}
                                                  onChange={e => setVehicleCategory(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold"
                                                style={{fontFamily: "'Ubuntu', sans-serif"}}>Fuel Type</Form.Label>
                                    <Form.Select className="border-2 border-slate-700"
                                                 style={{fontFamily: "'Ubuntu', sans-serif"}} value={fuelType}
                                                 onChange={e => setFuelType(e.target.value)}>
                                        <option value="">Select fuel type</option>
                                        <option value="Diesel">Diesel</option>
                                        <option value="Petrol">Petrol</option>
                                        <option value="Bio Diesel">Bio Diesel</option>
                                        <option value="Electric">Electric</option>
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

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold"
                                                style={{fontFamily: "'Ubuntu', sans-serif"}}>Remark</Form.Label>
                                    <Form.Control placeholder="Enter category(e.g. Cereal)"
                                                  className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={remark}
                                                  onChange={e => setRemark(e.target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                        Staff Id
                                    </Form.Label>
                                    <Form.Select className="border-2 border-slate-700" aria-label="Default select example" value={staffId} onChange={(e) => setStaffId(e.target.value)}>
                                        <option value="">Select Staff ID</option>
                                        {staffIds.map((id) => (
                                            <option key={id} value={id}>
                                                {id}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="font-bold" variant="primary" onClick={handleAddVehicle}>Save</Button>
                            <Button className="font-bold" variant="success" onClick={handleUpdateVehicle}>Update</Button>
                            <Button className="font-bold" variant="danger" onClick={handleDeleteVehicle}>Delete</Button>
                            <Button className="font-bold" variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <br />
                    <br />
                    <div className="overflow-x-auto overflow-y-auto table-container">
                        <Table striped bordered hover responsive className="custom-table">
                            <thead>
                            <tr>
                                <th>Vehicle Code</th>
                                <th>License Plate Number</th>
                                <th>Category</th>
                                <th>Fuel Type</th>
                                <th>Status</th>
                                <th>Remark</th>
                                <th>Staff ID</th>
                            </tr>
                            </thead>
                            <tbody>
                            {vehicles.map((vehicle, index) => (
                                <tr key={index}>
                                    <td>{vehicle.vehicleCode}</td>
                                    <td>{vehicle.licensePlateNumber}</td>
                                    <td>{vehicle.vehicleCategory}</td>
                                    <td>{vehicle.fuelType}</td>
                                    <td>{vehicle.status}</td>
                                    <td>{vehicle.remark}</td>
                                    <td>{vehicle.staffId}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default VehicleSection;
