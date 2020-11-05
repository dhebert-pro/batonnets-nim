import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppRoutes from 'src/components/AppRoutes';

const Body = () => (
    <Row className="p-3 flex-grow-1 mx-0">
        <Col className="p-0">
            <AppRoutes />
        </Col>
    </Row>
);

export default Body;