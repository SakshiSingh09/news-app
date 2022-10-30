import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-heading">
                <h4 style={{fontSize: "4rem", fontWeight: "700"}}>EXAMI<span style={{color : "#fb4c35"}}>NE</span></h4>
                <form className="newsletter">
                    <input type="text" placeholder="Enter address" />
                    <button>Search</button>
                </form>
            </div>
            <Container>
            <Row>
                <Col className="footerCol">
                    <ul>
                        <li>Headquarters: Mumbai, Maharashtra</li>
                        <li>Address: xxxxxxxxxxxxxxxxxxxxxx</li>
                        <li>Helpline No.: 9876543210</li>
                        <li>Email: examine-time@gmail.com</li>
                    </ul>
                </Col>
                <Col className="footerCol">
                    <ul>
                        <li>Hyderabad</li>
                        <li>Chennai</li>
                        <li>Kolkata</li>
                        <li>Bengalore</li>
                    </ul>
                </Col>
                <Col className="footerCol">
                    <ul>
                        <li><Link to="/politics" className="link">Politics</Link></li>
                        <li><Link to="/tech" className="link">Technology</Link></li>
                        <li><Link to="health" className="link">Health</Link></li>
                        <li><Link to="/sports" className="link">Sports</Link></li>
                    </ul>
                </Col>
            </Row>
            </Container>
            <div className="copyright">
                <p>Copyright @ Sakshi</p>
            </div>
        </div>
    )
}