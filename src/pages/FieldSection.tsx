import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {RootState} from "../store/Store.ts";
import {addField, deleteField, updateField} from "../reducers/FieldSlice.ts";
import {Navigation} from "../components/Navigation.tsx";
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/styles/Field.css";

const FieldSection = () => {
    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation, setFieldLocation] = useState('');
    const [fieldSize, setFieldSize] = useState('');
    const [fieldImage1, setFieldImage1] = useState<string | null>(null);
    const [fieldImage2, setFieldImage2] = useState<string | null>(null);

    const dispatch = useDispatch();
    const fields = useSelector((state: RootState) => state.fields.fields);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Image Upload
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setImage: (value: string | null) => void) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Add field
    const handleAddField = () => {
        dispatch(
            addField({ fieldCode, fieldName, fieldLocation, fieldSize, fieldImage1, fieldImage2 })
        );

        setFieldCode('');
        setFieldName('');
        setFieldLocation('');
        setFieldSize('');
        setFieldImage1(null);
        setFieldImage2(null);
        handleClose();
    };

    // Update field
    const handleUpdateField = () => {
        dispatch(
            updateField({ fieldCode, fieldName, fieldLocation, fieldSize, fieldImage1, fieldImage2 })
        );
        setFieldCode('');
        setFieldName('');
        setFieldLocation('');
        setFieldSize('');
        setFieldImage1(null);
        setFieldImage2(null);
        handleClose();
    };

    // Delete field
    const handleDeleteField = () => {
        dispatch(deleteField(fieldCode));
        setFieldCode('');
        handleClose();
    };

    return (
        <div className="flex overflow-hidden bg-emerald-200">
            <Navigation />
            <div className="flex-1 p-5">
                <Container fluid>
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <div className="bg-red-800 p-3 rounded top-50">
                                <Container fluid>
                                    <Row className="align-items-center">
                                        <h1 className="font-bold text-2xl text-neutral-100"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                            Field Management
                                        </h1>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Button variant="primary" onClick={handleShow} className="h-1/5 max-w-40 font-bold"
                            style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                        + Add Field
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field Details Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body  className="bg-blue-300">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                        Code</Form.Label>
                                    <Form.Control className="border-2 border-slate-700" style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={fieldCode} onChange={e => setFieldCode(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                        Name</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700" style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={fieldName} onChange={e => setFieldName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                        Location</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700" style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={fieldLocation}
                                                  onChange={e => setFieldLocation(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Field
                                        Size (Sq. m)</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700" style={{fontFamily: "'Ubuntu', sans-serif"}} type="number"
                                                  value={fieldSize} onChange={e => setFieldSize(e.target.value)}/>
                                </Form.Group>


                                <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>
                                            Field Image 1
                                        </Form.Label>
                                        <div className="image-box">
                                            {fieldImage1 ? (
                                                <img src={fieldImage1} alt="Field Image 1"/>
                                            ) : (
                                                <div className="text-center text-muted font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>No Image Selected</div>
                                            )}
                                        </div>
                                        <Button className="choose-image-btn" as="label">
                                            Choose Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e, setFieldImage1)}
                                                hidden
                                            />
                                        </Button>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>
                                            Field Image 2
                                        </Form.Label>
                                        <div className="image-box">
                                            {fieldImage2 ? (
                                                <img src={fieldImage2} alt="Field Image 2"/>
                                            ) : (
                                                <div className="text-center text-muted font-bold text-slate-600" style={{fontFamily: "'Ubuntu', sans-serif"}}>No Image Selected</div>
                                            )}
                                        </div>
                                        <Button className="choose-image-btn" as="label">

                                            Choose Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e, setFieldImage2)}
                                                hidden
                                            />
                                        </Button>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="font-bold" variant="primary" onClick={handleAddField}>Save</Button>
                            <Button className="font-bold" variant="success" onClick={handleUpdateField}>Update</Button>
                            <Button className="font-bold" variant="danger" onClick={handleDeleteField}>Delete</Button>
                            <Button className="font-bold" variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <br/>
                    <br/>
                    <div className="overflow-x-auto overflow-y-auto table-container">
                        <Table striped bordered hover responsive className="custom-table">
                            <thead>
                            <tr>
                                <th>Field Code</th>
                                <th>Field Name</th>
                                <th>Field Location</th>
                                <th>Field Size</th>
                                <th>Field Image 01</th>
                                <th>Field Image 02</th>
                            </tr>
                            </thead>
                            <tbody>
                            {fields.map((field, index) => (
                                <tr key={index}>
                                    <td>{field.fieldCode}</td>
                                    <td>{field.fieldName}</td>
                                    <td>{field.fieldLocation}</td>
                                    <td>{field.fieldSize}</td>
                                    <td><img src={field.fieldImage1 || ''} alt="Field 1" className="img-preview"/></td>
                                    <td><img src={field.fieldImage2 || ''} alt="Field 2" className="img-preview"/></td>
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

export default FieldSection;
