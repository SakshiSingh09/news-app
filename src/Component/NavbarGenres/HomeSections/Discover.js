import React from 'react'
import { Row, Col } from 'react-bootstrap';
import DiscoverCard from "./Card2.js";
import gadget from "../../../images/gadgets.webp";
import robot from "../../../images/robots.webp";
import movie from "../../../images/movie.jpg";
import game from "../../../images/game.webp";
import wildlife from "../../../images/wildlife.webp";
import { NavLink } from 'react-router-dom';

export default function Discover(){
    return(
        <div className='discoverSectionLayout'>
            <h6 className='sectionHeading'>Discover</h6>
            <Row className="discoverContent">
                <Col className='discoverCard'>
                    <NavLink to="/gadget" className='link'><DiscoverCard image={gadget} title={"Gadgets"}/></NavLink>
                </Col>
                <Col className='discoverCard'>
                    <NavLink to="/robot" className='link'><DiscoverCard image={robot} title={"Robots"}/></NavLink>
                </Col>
                <Col className='discoverCard'>
                    <NavLink to="/movie" className='link'><DiscoverCard image={movie} title={"Movies"}/></NavLink>
                </Col>
                <Col className='discoverCard'>
                    <NavLink to="game" className='link'><DiscoverCard image={game} title={"Games"}/></NavLink>
                </Col>
                <Col className='discoverCard'>
                    <NavLink to="wildlife" className='link'><DiscoverCard image={wildlife} title={"Wildlife"}/></NavLink>
                </Col>
            </Row>
        </div>
    )
}