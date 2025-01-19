import {Navigation} from "../components/Navigation.tsx";
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useDispatch} from "react-redux";


const CropSection = () => {

    const [cropCode,setCropCode] = useState("");
    const [cropCommonName, setCropCommonName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [cropImage, setCropImage] = useState<string | null>(null);
    const [cropCategory, setCropCategory] = useState("");
    const [season,setSeason] = useState("");
    const [fieldCode,setFieldCode] = useState("");
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    return (
        <>
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
                                                Crop Management
                                            </h1>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <Button variant="primary" onClick={handleShow} className="h-1/5 max-w-40 font-bold"
                                style={{fontFamily: "'Ubuntu', sans-serif"}}>
                            + Add Crop
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Crop
                                    Details Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="bg-blue-300">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Crop
                                            Code</Form.Label>
                                        <Form.Control className="border-2 border-slate-700"
                                                      style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                      value={cropCode} onChange={e => setCropCode(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Crop
                                            Common
                                            Name</Form.Label>
                                        <Form.Control className="border-2 border-zinc-700"
                                                      style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                      value={cropCommonName}
                                                      onChange={e => setCropCommonName(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Crop
                                            Scientific Name</Form.Label>
                                        <Form.Control placeholder="Enter crop Scientific name"
                                                      className="border-2 border-zinc-700"
                                                      style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                      value={cropScientificName}
                                                      onChange={e => setCropScientificName(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>
                                            Crop Image
                                        </Form.Label>
                                        <div className="image-box">
                                            {cropImage ? (
                                                <img src={cropImage} alt="Crop Image 1"/>
                                            ) : (
                                                <div className="text-center text-muted font-bold"
                                                     style={{fontFamily: "'Ubuntu', sans-serif"}}>No Image
                                                    Selected</div>
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
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Crop
                                            Category</Form.Label>
                                        <Form.Control placeholder="Enter category(e.g. Cereal)"
                                                      className="border-2 border-zinc-700"
                                                      style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                      value={cropCategory}
                                                      onChange={e => setCropCategory(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Crop
                                            Season</Form.Label>
                                        <Form.Control placeholder="Enter crop season"
                                                      className="border-2 border-zinc-700"
                                                      style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                      value={season} onChange={e => setSeason(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="font-bold"
                                                    style={{fontFamily: "'Ubuntu', sans-serif"}}>Field Code</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Field Code</option>
                                        </Form.Select>
                                    </Form.Group>

                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="font-bold" variant="primary">Save</Button>
                                <Button className="font-bold" variant="success">Update</Button>
                                <Button className="font-bold" variant="danger">Delete</Button>
                                <Button className="font-bold" variant="secondary" onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        <br/><br/>
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

                                </tbody>
                            </Table>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}
export default CropSection;