import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GenerationList = ({ data, columns, onClick, nbGenerations, onChangeNbGenerations, onGenerate }) => (
    <Container>
        <Row className="mb-4 mx-0">
            <Col className="p-0">
                <Form className="justify-content-center" inline onSubmit={onGenerate} autoComplete="off">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="mr-2">Nombre de générations</Form.Label>
                        <Form.Control 
                            className="mr-2" 
                            placeholder="Entrez un nombre" 
                            name="nb-generations" 
                            value={nbGenerations} 
                            onChange={onChangeNbGenerations}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Simuler
                    </Button>
                </Form>
            </Col>
        </Row>
        <Row className="mx-0">
            <Col className="p-0">
                <MaterialTable
                    title="Meilleur individu"
                    data={data}
                    columns={columns}
                    actions={[
                        {
                            icon: 'casino',
                            tooltip: 'Tester',
                            onClick
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1
                    }}
                />
            </Col>
        </Row>
    </Container>
);

GenerationList.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    nbGenerations: PropTypes.string.isRequired,
    onChangeNbGenerations: PropTypes.func.isRequired,
    onGenerate: PropTypes.func.isRequired
};

export default GenerationList;