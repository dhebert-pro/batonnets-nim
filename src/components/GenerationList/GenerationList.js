/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DataTable from 'src/components/DataTable';
import ActionLink from 'src/components/DataTable/ActionLink';

const generationColumn = {
    'title': 'Numéro',
    'field': 'generation'
};

const columnsBase = [
    {...generationColumn,
        'render': rowData => (
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip>
                        <div><strong>Gagnant : </strong>{rowData.winner.name}</div>
                        <div><strong>Victoires : </strong>{rowData.winner.winning}</div>
                        <div><strong>Défaites : </strong>{rowData.winner.losing}</div>
                    </Tooltip>
                }
            >
                <span>{rowData.generation}</span>
            </OverlayTrigger>
        )
    }
];

const columns = [
    {...generationColumn},
    {
        'title': 'Gagnant',
        'render': rowData => (
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip>
                        {rowData.winner.name}
                    </Tooltip>
                }
            >
                <span>AG-{rowData.winner.name.substring(0, 4)}</span>
            </OverlayTrigger>
        )
    },
    {
        'title': 'Victoires',
        'field': 'winner.winning',
        'type': 'numeric'
    },
    {
        'title': 'Défaites',
        'field': 'winner.losing',
        'type': 'numeric'
    }
];

const GenerationList = ({ data, nbGenerations, nbGenerationsCreated, onChangeNbGenerations, onGenerate }) => {

    const percent = 100 * nbGenerationsCreated / nbGenerations || 0;

    return (
        <Container>
            <Row className="mb-4 mx-0">
                <Col className="p-0">
                    <Form inline className="justify-content-center" onSubmit={onGenerate} autoComplete="off">
                        <Form.Group>
                            <Form.Label className="mr-2">Nombre de générations</Form.Label>
                            <Form.Control 
                                className="mr-2" 
                                placeholder="Entrez un nombre" 
                                name="nb-generations" 
                                value={nbGenerations} 
                                onChange={onChangeNbGenerations}
                            />
                        </Form.Group>
                        <Button className="m-2" variant="primary" type="submit">
                            Simuler
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col xs={{ span: 8, offset: 2 }}>
                    <ProgressBar striped now={percent} label={`${nbGenerationsCreated} / ${nbGenerations}`} />
                </Col>
            </Row>
            <Row className="mx-0 d-none d-md-block">
                <Col className="p-0">
                    <DataTable
                        title="Meilleur individu"
                        data={data}
                        columns={columns}
                        actions={[
                            {
                                icon: 'casino',
                                tooltip: 'Tester',
                                link: '/play',
                                id: ['winner','_id'],
                                onClick: () => null
                            }
                        ]}
                        components={{
                            Action: ActionLink,
                        }}
                        options={{
                            actionsColumnIndex: -1
                        }}
                    />
                </Col>
            </Row>
            <Row className="mx-0 d-block d-md-none">
                <Col className="p-0">
                    <DataTable
                        title="Meilleur individu"
                        data={data}
                        columns={columnsBase}
                        actions={[
                            {
                                icon: 'casino',
                                tooltip: 'Tester',
                                link: '/play',
                                id: ['winner','_id'],
                                onClick: () => null
                            }
                        ]}
                        components={{
                            Action: ActionLink,
                        }}
                        options={{
                            actionsColumnIndex: -1,
                            search: false
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

GenerationList.propTypes = {
    data: PropTypes.array.isRequired,
    nbGenerations: PropTypes.string.isRequired,
    nbGenerationsCreated: PropTypes.number.isRequired,
    onChangeNbGenerations: PropTypes.func.isRequired,
    onGenerate: PropTypes.func.isRequired
};

export default GenerationList;