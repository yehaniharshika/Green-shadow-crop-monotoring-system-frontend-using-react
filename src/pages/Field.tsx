import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Button, Modal, Form, Col, Container, Row, Table} from 'react-bootstrap';
import { FaCamera } from 'react-icons/fa';
import { Navigation } from "../components/Navigation";
import "../components/Field.css";


const Field = () => {
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const [fieldSize, setFieldSize] = useState('');
    const [fieldImage1, setFieldImage1] = useState('');
    const [fieldImage2, setFieldImage2] = useState('');
    const [staffId, setStaffId] = useState('');
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddField = () => {
        // Create the new field object
        const newField = {
            fieldCode,
            fieldName,
            fieldLocation,
            fieldSize,
            fieldImage1,
            fieldImage2,
            staffId,
        };

        // Dispatch action to Redux store
        dispatch({
            type: 'ADD_FIELD',
            payload: newField,
        });

        // Reset form after adding
        setFieldCode('');
        setFieldName('');
        setFieldLocation('');
        setFieldSize('');
        setFieldImage1('');
        setFieldImage2('');
        setStaffId('');
        handleClose(); // Close the modal
    };



    return (
        <div className="flex bg-emerald-200">
            <Navigation/>
            <div className="flex-1 p-5">
                <Container fluid>
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <div className="bg-red-800 p-3 rounded top-50">
                                <Container fluid>
                                    <Row className="align-items-center">
                                        <h1 className="font-bold text-2xl text-neutral-100" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field Management</h1>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>

                    <br/><br/>
                    <Button variant="primary" onClick={handleShow} className="h-1/5 w-1/12 font-bold " style={{fontFamily: "'Ubuntu', sans-serif"}}>
                        + Add Field
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Field Details Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container mx-auto bg-red-400 p-4">
                                <Form>
                                    <Form.Group className="mb-3" controlId="field-code">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                            Code</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Field Code"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="field-name">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                            Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Field Name"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="field-location">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                            Location</Form.Label>
                                        <Form.Control as="textarea" rows={2}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="field-size">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                            Size (Sq. m)</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Field Size (Sq. m)"/>
                                    </Form.Group>

                                    {/* Image Upload Section 1 */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}
                                                    htmlFor="fieldImage1">Field Image 01</Form.Label>
                                        <div className="image-container">
                                            <div className="image-box">
                                                {fieldImage1 && <img src={fieldImage1} alt="Field Image 1 Preview"/>}
                                            </div>
                                            <label htmlFor="fieldImage1" className="choose-image-btn">
                                                <FaCamera size={25}/> Choose Image
                                            </label>
                                            <input type="file" className="d-none" id="fieldImage1" accept="image/*"/>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}
                                                    htmlFor="fieldImage1">Field Image 02</Form.Label>
                                        <div className="image-container">
                                            <div className="image-box">
                                                {fieldImage1 && <img src={fieldImage1} alt="Field Image 1 Preview"/>}
                                            </div>
                                            <label htmlFor="fieldImage1" className="choose-image-btn">
                                                <FaCamera size={25}/> Choose Image
                                            </label>
                                            <input type="file" className="d-none" id="fieldImage1" accept="image/*"/>
                                        </div>
                                    </Form.Group>

                                </Form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddField}>Save</Button>
                            <Button variant="secondary" onClick={handleClose}>Update</Button>
                            <Button variant="secondary" onClick={handleClose}>Delete</Button>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    {/* Chart Section */}

                    <br/><br/>
                    <section
                        className="field-table-view col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10"
                        style={{overflowX: "auto", overflowY: "auto", maxHeight: "540px", width: "96%"}}
                    >
                        <div className="table-responsive">
                            <Table striped bordered responsive>
                                <thead>
                                <tr>
                                    <th scope="col">Field Code</th>
                                    <th scope="col">Field Name</th>
                                    <th scope="col">Field Location</th>
                                    <th scope="col">Field Size</th>
                                    <th scope="col">Field Image 01</th>
                                    <th scope="col">Field Image 02</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Example Row (replace with dynamic rows later) */}
                                <tr>
                                    <td>ST001</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>Male</td>
                                    <td>12</td>
                                    <td>Main Lane</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </section>

                </Container>
            </div>

        </div>
    );
};

export default Field;
