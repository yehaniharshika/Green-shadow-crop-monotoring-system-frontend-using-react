import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { MdAddLocationAlt } from 'react-icons/md';
import { FaCamera } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import { Navigation } from "../components/Navigation";

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

    // Handle Image Selection
    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFieldImage1(URL.createObjectURL(file)); // Set preview URL
        }
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFieldImage2(URL.createObjectURL(file)); // Set preview URL
        }
    };

    return (
        <div className="flex">
            <Navigation />
            <Button variant="primary" onClick={handleShow} className="h-1/5">
                <MdAddLocationAlt /> Add Field
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Field Details Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container mx-auto bg-red-400 p-4">
                        <Form>
                            <Form.Group className="mb-3" controlId="field-code">
                                <Form.Label className="font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>Field Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Field Code" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="field-name">
                                <Form.Label className="font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>Field Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Field Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="field-location">
                                <Form.Label className="font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>Field Location</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="field-size">
                                <Form.Label className="font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>Field Size (Sq. m)</Form.Label>
                                <Form.Control type="number" placeholder="Enter Field Size (Sq. m)" />
                            </Form.Group>

                            {/* Image Upload Section 1 */}
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="fieldImage1">Field Image 1</Form.Label>
                                <div className="image-container">
                                    <div className="image-box">
                                        {fieldImage1 &&
                                            <Image id="previewImage1" src={fieldImage1} alt="Field Image 1 Preview" fluid />
                                        }
                                    </div>
                                    <label htmlFor="fieldImage1" className="choose-image-btn">
                                        <FaCamera size={25} /> Choose Image
                                    </label>
                                    <Form.Control
                                        type="file"
                                        className="d-none"
                                        id="fieldImage1"
                                        accept="image/*"
                                        onChange={handleImageChange1}
                                    />
                                </div>
                            </Form.Group>

                            {/* Image Upload Section 2 */}
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="fieldImage2">Field Image 2</Form.Label>
                                <div className="image-container">
                                    <div className="image-box">
                                        {fieldImage2 &&
                                            <Image id="previewImage2" src={fieldImage2} alt="Field Image 2 Preview" fluid />
                                        }
                                    </div>
                                    <label htmlFor="fieldImage2" className="choose-image-btn">
                                        <FaCamera size={25} /> Choose Image
                                    </label>
                                    <Form.Control
                                        type="file"
                                        className="d-none"
                                        id="fieldImage2"
                                        accept="image/*"
                                        onChange={handleImageChange2}
                                    />
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
        </div>
    );
};

export default Field;
