import { Navigation } from "../components/Navigation";
import {LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Legend, BarChart, Bar,} from "recharts";
import {Card, Col, Container, FormControl, Image, InputGroup, Row,} from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import {SiGooglemessages} from "react-icons/si";

const Dashboard = () => {
    const data = [
        { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
        { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
        { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
        { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="flex">
            {/* Navigation Sidebar */}
            <Navigation />

            {/* Main Content Area */}
            <div className="flex-1 p-5">
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <InputGroup className="mb-3">
                                <FormControl placeholder="Search..."/>
                                <InputGroup.Text>
                                    <MdSearch/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <div className="d-flex align-items-center gap-2">

                            <div dir="rtl">
                                <SiGooglemessages size={25} className=""/>
                            </div>


                            <div className="user ms-2">
                                <Image
                                    src="/src/icon/woman.png"
                                    roundedCircle
                                    alt="User"
                                    width={50}
                                />
                            </div>
                        </div>
                    </Row>

                    <Row className="g-3">
                        {[
                            {id: "field", count: 98, label: "Field Count", icon: "field.png"},
                            {id: "staff", count: 43, label: "Staff Count", icon: "staff.png"},
                            {id: "crop", count: 7, label: "Crop Count", icon: "plant.png"},
                            {id: "vehicle", count: 8, label: "Vehicle Count", icon: "vehicle.png"},
                        ].map((card) => (
                            <Col sm={6} lg={3} key={card.id}>
                                <Card className="h-100">
                                    <Card.Body className="d-flex align-items-center">
                                        <img
                                            src={`/src/icon/${card.icon}`}
                                            alt={`${card.id}-icon`}
                                            className="me-3"
                                            style={{ width: 50, height: 50 }}
                                        />
                                        <div>
                                            <h5 className="mb-0">{card.count}</h5>
                                            <small>{card.label}</small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Chart Section */}
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <h5>Line Chart</h5>
                                    <LineChart
                                        width={400}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="pv"
                                            stroke="#8884d8"
                                            activeDot={{ r: 8 }}
                                        />
                                    </LineChart>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <h5>Bar Chart</h5>
                                    <BarChart
                                        width={400}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
