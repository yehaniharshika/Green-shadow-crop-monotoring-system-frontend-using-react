import {Navigation} from "../components/Navigation.tsx";
import {Col, Container, Form, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addLog, deleteLog, updateLog} from "../reducers/LogsSlice.ts";
import {RootState} from "../store/Store.ts";
import {motion} from "framer-motion";

const LogSection = () => {
    const [logCode,setLogCode] = useState("");
    const [logDate,setLogDate] = useState("");
    const [logDetails,setLogDetails] = useState("");
    const [logImage, setLogImage] = useState<string | null>(null);
    const logs = useSelector((state : RootState) => state.logs.logs);

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

    // Add log
    const handleAddLogs = () => {
        dispatch(
            addLog({logCode, logDate, logDetails, logImage })
        );

        setLogCode('');
        setLogDate('');
        setLogDetails('');
        setLogImage(null);
        handleClose();
    };

    // Update field
    const handleUpdateLogs = () => {
        dispatch(
            updateLog({logCode,logDate,logDetails,logImage})
        );
        setLogCode('');
        setLogDate('');
        setLogDetails('');
        setLogImage(null);
        handleClose();
    };

    // Delete field
    const handleDeleteLogs = () => {
        dispatch(deleteLog(logCode));
        setLogCode('');
        handleClose();
    };

    return (
        <div className="flex overflow-hidden bg-emerald-200">
            <Navigation/>
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
                                            Logs Management
                                        </motion.h1>
                                    </Row>
                                </Container>
                            </motion.div>
                        </Col>
                    </Row>
                    <br/>
                    <Button variant="primary" onClick={handleShow} className="h-1/5 max-w-40 font-bold"
                            style={{fontFamily: "'Ubuntu', sans-serif"}}>
                        + Add Logs
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Logs
                                Details Form</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-blue-300">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Log
                                        Code</Form.Label>
                                    <Form.Control className="border-2 border-slate-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={logCode} onChange={e => setLogCode(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Log
                                        Date</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="date"
                                                  value={logDate} onChange={e => setLogDate(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>Log
                                        Details</Form.Label>
                                    <Form.Control className="border-2 border-zinc-700"
                                                  style={{fontFamily: "'Ubuntu', sans-serif"}} type="text"
                                                  value={logDetails}
                                                  onChange={e => setLogDetails(e.target.value)}/>
                                </Form.Group>


                                <Form.Group className="mb-3">
                                    <Form.Label className="font-bold" style={{fontFamily: "'Ubuntu', sans-serif"}}>
                                        Log Image
                                    </Form.Label>
                                    <div className="image-box">
                                        {logImage ? (
                                            <img src={logImage} alt="Field Image 1"/>
                                        ) : (
                                            <div className="text-center text-muted font-bold"
                                                 style={{fontFamily: "'Ubuntu', sans-serif"}}>No Image Selected</div>
                                        )}
                                    </div>
                                    <Button className="choose-image-btn" as="label">
                                        Choose Image
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(e, setLogImage)}
                                            hidden
                                        />
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="font-bold" variant="primary" onClick={handleAddLogs}>Save</Button>
                            <Button className="font-bold" variant="success" onClick={handleUpdateLogs}>Update</Button>
                            <Button className="font-bold" variant="danger" onClick={handleDeleteLogs}>Delete</Button>
                            <Button className="font-bold" variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <br/>
                    <br/>
                    <div className="overflow-x-auto overflow-y-auto table-container">
                        <Table striped bordered hover responsive className="custom-table">
                            <thead>
                            <tr>
                                <th>Log Code</th>
                                <th>Log Date</th>
                                <th>Log Details</th>
                                <th>Log Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {logs.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.logCode}</td>
                                    <td>{log.logDate}</td>
                                    <td>{log.logDetails}</td>
                                    <td><img src={log.logImage || ''} alt="log image" className="img-preview"/></td>
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

export default LogSection;