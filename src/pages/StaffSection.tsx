import {Navigation} from "../components/Navigation.tsx";
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/Store.ts";
import {addStaff, deleteStaff, updateStaff} from "../reducers/StaffSlice.ts";
import "../components/styles/Staff.css"

const StaffSection = () => {
    const [staffId, setStaffId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [addressLine1, setAddressLine1] = useState("");
    const [addressLine2, setAddressLine2] = useState("");
    const [addressLine3, setAddressLine3] = useState("");
    const [addressLine4, setAddressLine4] = useState("");
    const [addressLine5, setAddressLine5] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [designation, setDesignation] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const dispatch = useDispatch();
    const staff = useSelector((state: RootState) => state.staff.staff);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddStaff = () => {
        dispatch(
            addStaff({staffId,firstName,lastName,gender,addressLine1,addressLine2,addressLine3,addressLine4,addressLine5,dateOfBirth,joinedDate,designation,contactNumber,email,role})
        );

        setStaffId('');
        setFirstName('');
        setLastName('');
        setGender('');
        setAddressLine1('');
        setAddressLine2('');
        setAddressLine3('');
        setAddressLine4('');
        setAddressLine5('');
        setDateOfBirth('');
        setJoinedDate('');
        setDesignation('');
        setContactNumber('');
        setEmail('');
        setRole('');
        handleClose();
    }

    // update staff
    const handleUpdateStaff=() => {
        dispatch(
          updateStaff({staffId,firstName,lastName,gender,addressLine1,addressLine2,addressLine3,addressLine4,addressLine5,dateOfBirth,joinedDate,designation,contactNumber,email,role})
        );

        setStaffId('');
        setFirstName('');
        setLastName('');
        setGender('');
        setAddressLine1('');
        setAddressLine2('');
        setAddressLine3('');
        setAddressLine4('');
        setAddressLine5('');
        setDateOfBirth('');
        setJoinedDate('');
        setDesignation('');
        setContactNumber('');
        setEmail('');
        setRole('');
        handleClose();
    }

    const handleDeleteStaff = () => {
        dispatch(deleteStaff(staffId));
        setStaffId('');
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
                                            Staff Management
                                        </h1>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="primary" onClick={handleShow} className="h-1/5 max-w-40 font-bold"
                            style={{fontFamily: "'Ubuntu', sans-serif"}}>
                        + Add Staff
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Staff
                                Details Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-blue-300">
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="staff-id">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Staff
                                                ID</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                         value={staffId}  onChange={e => setStaffId(e.target.value)} placeholder="Enter Staff ID"/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="firstName">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>First
                                                Name</Form.Label>
                                            <Form.Control value={firstName} onChange={e => setFirstName(e.target.value)} style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter first name"/>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="lastName">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Last
                                                Name</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter last name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                                        </Form.Group>
                                    </Col>


                                    <Col md={6}>
                                        <Form.Group controlId="gender">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Gender</Form.Label>
                                            <Form.Select style={{fontFamily: "'Ubuntu', sans-serif"}} value={gender} onChange={e => setGender(e.target.value)}>
                                                <option value="" selected>Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br/>
                                <hr/>
                                <br/>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="address-line-01">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Address Line 01(B. No)</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter Building No" value={addressLine1} onChange={e => setAddressLine1(e.target.value)}/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="address-line-02">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Address Line
                                                02(Lane)</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter Lane" value={addressLine2} onChange={e => setAddressLine2(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="address-line-03">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Address Line
                                                03(City)</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter City" value={addressLine3} onChange={e => setAddressLine3(e.target.value)}/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="address-line-04">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Address Line
                                                04(State)</Form.Label>
                                            <Form.Control placeholder="Enter state" value={addressLine4} onChange={e => setAddressLine4(e.target.value)} style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="address-line-05">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Address Line 05(P.
                                                code)</Form.Label>
                                            <Form.Control placeholder="Enter Postal Code" value={addressLine5} onChange={e => setAddressLine5(e.target.value)} style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br/>
                                <hr/>
                                <br/>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="date-of-birth">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Date Of Birth</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="date" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="joined-date">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Joined Date</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="date" value={joinedDate} onChange={e => setJoinedDate(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="designation">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Designation</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter designation" value={designation} onChange={e => setDesignation(e.target.value)}/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="contact-number">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Contact Number</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="tel"
                                                          placeholder="Enter contact-number" value={contactNumber} onChange={e => setContactNumber(e.target.value)}/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group controlId="email">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Email Address
                                                03(City)</Form.Label>
                                            <Form.Control style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                          placeholder="Enter email address" value={email} onChange={e => setEmail(e.target.value)}/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group controlId="role">
                                            <Form.Label className="font-bold"
                                                        style={{fontFamily: "'Ubuntu', sans-serif"}}>Role</Form.Label>
                                            <Form.Select style={{fontFamily: "'Ubuntu', sans-serif"}} value={role} onChange={e => setRole(e.target.value)}>
                                                <option selected>Select role</option>
                                                <option value="MANAGER">MANAGER</option>
                                                <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                                <option value="SCIENTIST">SCIENTIST</option>
                                                <option value="OTHER">OTHER</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br/>
                            </Form>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="font-bold" variant="primary" onClick={handleAddStaff}>Save</Button>
                            <Button className="font-bold" variant="success" onClick={handleUpdateStaff}>Update</Button>
                            <Button className="font-bold" variant="danger" onClick={handleDeleteStaff}>Delete</Button>
                            <Button className="font-bold" variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <br/>
                    <br/>
                    <div className="table-container">
                        <Table
                            striped
                            bordered
                            hover
                            responsive
                            className="custom-table"
                        >
                            <thead>
                            <tr>
                                <th scope="col">Staff ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Building No/Name</th>
                                <th scope="col">Lane</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Postal Code</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Joined Date</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Contact No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                            </tr>
                            </thead>
                            <tbody>
                            {staff.map((staff, index) => (
                                <tr key={index}>
                                    <td>{staff.staffId}</td>
                                    <td>{staff.firstName}</td>
                                    <td>{staff.lastName}</td>
                                    <td>{staff.gender}</td>
                                    <td>{staff.addressLine1}</td>
                                    <td>{staff.addressLine2}</td>
                                    <td>{staff.addressLine3}</td>
                                    <td>{staff.addressLine4}</td>
                                    <td>{staff.addressLine5}</td>
                                    <td>{staff.dateOfBirth}</td>
                                    <td>{staff.joinedDate}</td>
                                    <td>{staff.designation}</td>
                                    <td>{staff.contactNumber}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.role}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default StaffSection;