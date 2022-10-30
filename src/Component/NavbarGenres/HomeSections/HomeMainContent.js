import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from "react-bootstrap";
import no_img1 from "../../../images/no_img1.jpg";

export default function HomeMainContent(props){
    let headlines = props.topHeadlines.map(headline => headline);
    if(headlines.length !== 0){
        const formatDate = (date) => {
            let formattedDate = (date.split("T"))[0];
            return formattedDate;
        }
        const formatTitle = (title) => {
            let splittedTitle = title.split("-");
            splittedTitle[0] = splittedTitle[0].length>90?splittedTitle[0].substring(0,90)+'...':splittedTitle[0];
            return splittedTitle.join(" -");
        }
        const setImage = (imageUrl) => {
            return imageUrl === null?`url(${no_img1})`:`url(${imageUrl})`;
        }
        return(
            <div className="homeMainRow">
                <Row className="mainPageRow">
                        <Col className="mainPageColumn" style={{backgroundImage: setImage(headlines[2].urlToImage)}}>
                            <div className="textContent">
                                    <a href={headlines[2].url} target="_blank">{headlines[2].title}</a>
                                    <p className="newsDate">
                                        <box-icon name='calendar' size="sm" type='solid' color="#fff"></box-icon>
                                        {formatDate(headlines[2].publishedAt)}
                                    </p>
                                </div>
                        </Col>
                    <Col>
                        <Row style={{height: "50%"}}>
                            <Col className="mainPageColumn" style={{backgroundImage: setImage(headlines[0].urlToImage)}}>
                                <div className="textContent">
                                    <a href={headlines[0].url} target="_blank">{headlines[0].title}</a>
                                    <p className="newsDate">
                                        <box-icon name='calendar' size="sm" type='solid' color="#fff"></box-icon>
                                        {formatDate(headlines[0].publishedAt)}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{height: "50%"}}>
                            <Col className="mainPageColumn" style={{backgroundImage: setImage(headlines[1].urlToImage)}}>
                                <div className="textContent">
                                    <a href={headlines[1].url} target="_blank">{headlines[1].title}</a>
                                    <p className="newsDate">
                                        <box-icon name='calendar' size="sm" type='solid' color="#fff"></box-icon>
                                        {formatDate(headlines[1].publishedAt)}
                                    </p>
                                </div>
                            </Col>
                            <Col className="mainPageColumn" style={{backgroundImage: setImage(headlines[3].urlToImage)}}>
                                <div className="textContent">
                                    <a href={headlines[3].url} taget="_blank">{formatTitle(headlines[3].title)}</a>
                                    <p className="newsDate">
                                        <box-icon name='calendar' size="sm" type='solid' color="#fff"></box-icon>
                                        {formatDate(headlines[3].publishedAt)}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>            
        )
    }    
}