import { Button, Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Landingpage() {

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            navigate("/mynotes");
        }
    }, [navigate]);
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to NotesWriter</h1>
                            <p className="subtitle">Write your thoughts with privacy</p>
                        </div>
                        <div className="buttonContainer">
                            <Link to="/login">
                                <Button size="lg" className="landingbutton">
                                    Login
                                </Button>

                            </Link>
                            <Link to="/register">
                                <Button
                                    variant="outline-primary"
                                    size="lg"
                                    className="landingbutton"
                                >
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Landingpage;