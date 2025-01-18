import { Navigation } from "../components/Navigation";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Line,
    Tooltip,
    Legend,
    BarChart,
    Bar,
} from "recharts";
import {
    Card,
    Col,
    Container,
    FormControl,
    Image,
    InputGroup,
    Row,
} from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring


const Dashboard = () => {
    // Data for Line Chart (Crop Growth Analytics)
    const growthData = [
        { name: "Jan", growth: 30, target: 40 },
        { name: "Feb", growth: 45, target: 50 },
        { name: "Mar", growth: 60, target: 70 },
        { name: "Apr", growth: 75, target: 80 },
        { name: "May", growth: 90, target: 95 },
        { name: "Jun", growth: 100, target: 110 },
    ];

    // Data for Bar Chart (Crop Yield Analytics)
    const yieldData = [
        { name: "Wheat", yield: 2400, target: 2500 },
        { name: "Rice", yield: 2100, target: 2200 },
        { name: "Corn", yield: 2800, target: 3000 },
        { name: "Soybean", yield: 2300, target: 2400 },
        { name: "Barley", yield: 1900, target: 2000 },
    ];

    const springProps = useSpring({
        from: { opacity: 0, transform: "translateY(50px)" },
        to: { opacity: 1, transform: "translateY(0)" },
        delay: 200,
    });

    return (
        <div className="flex w-full h-full bg-teal-500 overflow-hidden">
            {/* Navigation Sidebar */}
            <Navigation />

            {/* Main Content Area */}
            <div className="flex-1 p-5 bg-emerald-200">
                <Container fluid>
                    <Row className="align-items-center mb-3">
                        <Col md={12}>
                            <div className="bg-red-800 p-3 rounded top-50">
                                <Container fluid>
                                    <Row className="align-items-center">
                                        {/* Search Field */}
                                        <Col md={6}>
                                            <InputGroup>
                                                <FormControl placeholder="Search..." />
                                                <InputGroup.Text>
                                                    <MdSearch />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Col>

                                        {/* Icons and Profile */}
                                        <Col md={6}>
                                            <div className="d-flex justify-content-end align-items-center gap-3">
                                                <SiGooglemessages size={35} />
                                                <IoNotificationsCircleOutline size={35} />
                                                <Image
                                                    src="/src/icon/woman.png"
                                                    roundedCircle
                                                    alt="User"
                                                    width={40}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>


                    <Row className="g-3">
                        {[
                            { id: "field", count: 98, label: "Field Count", icon: "field.png" },
                            { id: "staff", count: 43, label: "Staff Count", icon: "staff.png" },
                            { id: "crop", count: 7, label: "Crop Count", icon: "plant.png" },
                            { id: "vehicle", count: 8, label: "Vehicle Count", icon: "vehicle.png" },
                        ].map((card) => (
                            <Col sm={6} lg={3} key={card.id}>
                                <Card className="h-100 bg-blue-950 shadow-lg border-3 border-amber-400 rounded-xl" style={{ minHeight: "150px" }}>
                                    <Card.Body className="d-flex align-items-center">
                                        <img
                                            src={`/src/icon/${card.icon}`}
                                            alt={`${card.id}-icon`}
                                            className="me-5"
                                            style={{ width: 66, height: 66 }}
                                        />
                                        <div>
                                            <h5 className="text-primary font-bold font-mono text-2xl">{card.count}</h5>
                                            <small className="text-secondary text-lg font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                                {card.label}
                                            </small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <br/><br/>
                    {/* Chart Section */}
                    <Row>
                        <Col md={6}>
                            <animated.div style={springProps}>
                                <Card style={{ height: 410}}>
                                    <div className="card-header">Crop Growth Analytics</div>
                                    <Card.Body className="bg-blue-300">
                                        <LineChart
                                            width={400}
                                            height={300}
                                            data={growthData}
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
                                                dataKey="growth"
                                                stroke="#8884d8"
                                                activeDot={{ r: 8 }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="target"
                                                stroke="#82ca9d"
                                            />
                                        </LineChart>
                                    </Card.Body>
                                </Card>
                            </animated.div>
                        </Col>

                        <Col md={6}>
                            <animated.div style={springProps}>
                                <Card style={{ height: 410}}>
                                    <div className="card-header">Crop Yield Analytics</div>
                                    <Card.Body>
                                        <BarChart
                                            width={400}
                                            height={300}
                                            data={yieldData}
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
                                            <Bar dataKey="yield" fill="#82ca9d" />
                                            <Bar dataKey="target" fill="#8884d8" />
                                        </BarChart>
                                    </Card.Body>
                                </Card>
                            </animated.div>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row className="g-3">
                        {[
                            { id: "field", count: 98, label: "Field Count", icon: "field.png" },
                            { id: "staff", count: 43, label: "Staff Count", icon: "staff.png" },
                            { id: "crop", count: 7, label: "Crop Count", icon: "plant.png" },
                            { id: "vehicle", count: 8, label: "Vehicle Count", icon: "vehicle.png" },
                        ].map((card) => (
                            <Col sm={6} lg={3} key={card.id}>
                                <Card className="h-100 bg-blue-950 shadow-lg border-3 border-amber-400 rounded-xl" style={{ minHeight: "150px" }}>
                                    <Card.Body className="d-flex align-items-center">
                                        <img
                                            src={`/src/icon/${card.icon}`}
                                            alt={`${card.id}-icon`}
                                            className="me-5"
                                            style={{ width: 66, height: 66 }}
                                        />
                                        <div>
                                            <h5 className="text-primary font-bold font-mono text-2xl">{card.count}</h5>
                                            <small className="text-secondary text-lg font-bold" style={{ fontFamily: "'Ubuntu', sans-serif" }}>
                                                {card.label}
                                            </small>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Dashboard;
