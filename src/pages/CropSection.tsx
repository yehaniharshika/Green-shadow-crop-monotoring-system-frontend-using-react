import { Navigation } from "../components/Navigation.tsx";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addCrop, deleteCrop, updateCrop } from "../reducers/CropSlice.ts";
import { RootState } from "../store/Store.ts";

const CropSection = () => {
    const [cropCode, setCropCode] = useState("");
    const [cropCommonName, setCropCommonName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [cropImage, setCropImage] = useState<string | null>(null);
    const [cropCategory, setCropCategory] = useState("");
    const [season, setSeason] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [fieldCodes, setFieldCodes] = useState([]); // State to hold field codes
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const crops = useSelector((state: RootState) => state.crops.crops);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fetch field codes from the backend when the component mounts
    useEffect(() => {
        const fetchFieldCodes = async () => {
            try {
                const response = await fetch("http://localhost:5173/field"); // Replace with your API URL
                if (!response.ok) {
                    throw new Error("Failed to fetch field codes");
                }
                const data = await response.json();
                setFieldCodes(data); // Assume the response is an array of field codes
            } catch (error) {
                console.error("Error fetching field codes:", error);
            }
        };

        fetchFieldCodes();
    }, []);

    const handleImageUpload = (
        event: React.ChangeEvent<HTMLInputElement>,
        setImage: (value: string | null) => void
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Add crop
    const handleAddCrop = () => {
        dispatch(
            addCrop({
                cropCode,
                cropCommonName,
                cropScientificName,
                cropImage,
                cropCategory,
                season,
                fieldCode,
            })
        );
        setCropCode("");
        setCropCommonName("");
        setCropScientificName("");
        setCropImage(null);
        setCropCategory("");
        setSeason("");
        setFieldCode("");
        handleClose();
    };

    // Update crop
    const handleUpdateCrop = () => {
        dispatch(
            updateCrop({
                cropCode,
                cropCommonName,
                cropScientificName,
                cropImage,
                cropCategory,
                season,
                fieldCode,
            })
        );
        setCropCode("");
        setCropCommonName("");
        setCropScientificName("");
        setCropImage(null);
        setCropCategory("");
        setSeason("");
        setFieldCode("");
        handleClose();
    };

    // Delete crop
    const handleDeleteCrop = () => {
        dispatch(deleteCrop(cropCode));
        setCropCode("");
        handleClose();
    };

    return (
        <>
            <div className="flex overflow-hidden bg-emerald-200">
                <Navigation />
                <div className="flex-1 p-5">
                    <Container fluid>
                        <Row className="align-items-center mb-3">
                            <Col md={12}>
                                <div className="bg-red-800 p-3 rounded top-50">
                                    <Container fluid>
                                        <Row className="align-items-center">
                                            <h1
                                                className="font-bold text-2xl text-neutral-100"
                                                style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            >
                                                Crop Management
                                            </h1>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Button
                            variant="primary"
                            onClick={handleShow}
                            className="h-1/5 max-w-40 font-bold"
                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                        >
                            + Add Crop
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title
                                    className="font-bold"
                                    style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                >
                                    Crop Details Form
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="bg-blue-300">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Crop Code
                                        </Form.Label>
                                        <Form.Control
                                            className="border-2 border-slate-700"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            type="text"
                                            value={cropCode}
                                            onChange={(e) => setCropCode(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Crop Common Name
                                        </Form.Label>
                                        <Form.Control
                                            className="border-2 border-zinc-700"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            type="text"
                                            value={cropCommonName}
                                            onChange={(e) => setCropCommonName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Crop Scientific Name
                                        </Form.Label>
                                        <Form.Control
                                            placeholder="Enter crop Scientific name"
                                            className="border-2 border-zinc-700"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            type="text"
                                            value={cropScientificName}
                                            onChange={(e) => setCropScientificName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Crop Image
                                        </Form.Label>
                                        <div className="image-box">
                                            {cropImage ? (
                                                <img src={cropImage} alt="Crop Image 1" />
                                            ) : (
                                                <div
                                                    className="text-center text-muted font-bold"
                                                    style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                                >
                                                    No Image Selected
                                                </div>
                                            )}
                                        </div>
                                        <Button className="choose-image-btn" as="label">
                                            Choose Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleImageUpload(e, setCropImage)}
                                                hidden
                                            />
                                        </Button>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Crop Category
                                        </Form.Label>
                                        <Form.Control
                                            placeholder="Enter category(e.g. Cereal)"
                                            className="border-2 border-zinc-700"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            type="text"
                                            value={cropCategory}
                                            onChange={(e) => setCropCategory(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Crop Season
                                        </Form.Label>
                                        <Form.Control
                                            placeholder="Enter crop season"
                                            className="border-2 border-zinc-700"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                            type="text"
                                            value={season}
                                            onChange={(e) => setSeason(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label
                                            className="font-bold"
                                            style={{ fontFamily: "'Ubuntu', sans-serif" }}
                                        >
                                            Field Code
                                        </Form.Label>
                                        <Form.Select
                                            aria-label="Select Field Code"
                                            value={fieldCode}
                                            onChange={(e) => setFieldCode(e.target.value)}
                                        >
                                            <option value="">Select a Field Code</option>
                                            {fieldCodes.map((code, index) => (
                                                <option key={index} value={code}>
                                                    {code}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    className="font-bold"
                                    variant="primary"
                                    onClick={handleAddCrop}
                                >
                                    Save
                                </Button>
                                <Button
                                    className="font-bold"
                                    variant="success"
                                    onClick={handleUpdateCrop}
                                >
                                    Update
                                </Button>
                                <Button
                                    className="font-bold"
                                    variant="danger"
                                    onClick={handleDeleteCrop}
                                >
                                    Delete
                                </Button>
                                <Button
                                    className="font-bold"
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <br/>
                        <br/>
                        <Table
                            bordered
                            hover
                            responsive
                            className="custom-table"
                        >
                            <thead>
                            <tr>
                                <th>Crop Code</th>
                                <th>Crop Common Name</th>
                                <th>Crop Scientific Name</th>
                                <th>Crop Category</th>
                                <th>Season</th>
                                <th>Field Code</th>
                                <th>Crop Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {crops.map((crop, index) => (
                                <tr key={index}>
                                    <td>{crop.cropCode}</td>
                                    <td>{crop.cropCommonName}</td>
                                    <td>{crop.cropScientificName}</td>
                                    <td>
                                        {crop.cropImage && (
                                            <img
                                                src={crop.cropImage}
                                                alt="Crop"
                                                style={{width: "100px", height: "100px"}}
                                            />
                                        )}
                                    </td>
                                    <td>{crop.cropCategory}</td>
                                    <td>{crop.season}</td>
                                    <td>{crop.fieldCode}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default CropSection;
