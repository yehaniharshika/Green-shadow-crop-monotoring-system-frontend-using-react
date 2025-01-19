import {Navigation} from "../components/Navigation.tsx";
import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";

const VehicleSection = () =>{
    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlateNumber, setLicensePlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status, setStatus] = useState("");
    const [remark, setRemark] = useState("");
    const [staffId, setStaffId] = useState([]);

    const dispatch = useDispatch();
    const vehicles = useSelector((state : RootState) => state.vehicles.vehicles);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
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
                                            Vehicle Management
                                        </h1>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="primary" onClick={handleShow} className="h-1/5 max-w-40 font-bold"
                            style={{fontFamily: "'Ubuntu', sans-serif"}}>
                        + Add Vehicle
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Vehicle
                                Details Form</Modal.Title>
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
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>License Plate Number</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={licensePlateNumber}
                                                  onChange={e => setLicensePlateNumber(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Vehicle Category</Form.Label>
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
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Remark</Form.Label>
                                    <Form.Control placeholder="Enter category(e.g. Cereal)"
                                                  className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={remark}
                                                  onChange={e => setRemark(e.target.value)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Staff
                                        Id</Form.Label>
                                    <Form.Select className="border-2 border-slate-700" aria-label="Default select example" value={staffId} onChange={e => setStaffId(e.target.value)}>
                                        <option>Staff Id</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="font-bold" variant="primary" >Save</Button>
                            <Button className="font-bold" variant="success" >Update</Button>
                            <Button className="font-bold" variant="danger">Delete</Button>
                            <Button className="font-bold" variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <br/><br/>
                </Container>

            </div>

        </div>
    );
}
export default VehicleSection;