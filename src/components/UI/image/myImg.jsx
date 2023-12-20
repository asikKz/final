import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const MyImg = ({src, alt}) => {
    return (

            <Container className={"image__container"}>
                <Row>
                    <Col>
                        <img width="100%" height="50%" src={src} alt={alt}/>
                        <hr/>
                    </Col>
                </Row>

            </Container>


    );
};

export default MyImg;