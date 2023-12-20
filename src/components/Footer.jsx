import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({children}) => {
    return (
        <footer className="mt-5 bg-dark text-light"> {children}
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Container fluid className="bg-white text-dark flex-grow-1">
                    <Row className="p-3">
                        <Col md={6}>
                            <p className="mb-0">&copy; 2023 Моя Книжная Коллекция</p>
                        </Col>
                        <Col md={6} className="text-right">
                            <p className="mb-1">Контакты:</p>
                            <ul className="list-unstyled mb-0">
                                <li>Email: asiadi001.com</li>
                                <li>M-number: 8 708 743 2944</li>
                                <li>Instagram: <a href="https://www.instagram.com/asylomaraly?igshid=OGQ5ZDc2ODk2ZA==">Asylbek Omaraly</a></li>
                                <li>Адрес: Абая 163 Алматы</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
