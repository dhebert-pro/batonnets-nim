/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DataTable from 'src/components/DataTable';

const nameColumn = {
    'title': 'Nom',
    'field': 'name'
};

const generationColumn = {
    'title': 'Génération',
    'field': 'generation'
};

const winningColumn = {
    'title': 'Victoires',
    'field': 'winning',
    'defaultSort': 'desc'
};

const columnsBase = [
    {...nameColumn,
        'render': rowData => (
            <OverlayTrigger
                placement='top'
                overlay={
                    <Tooltip>
                        <div><strong>Nom : </strong>{rowData.name}</div>
                        <div><strong>Victoires : </strong>{rowData.winning}</div>
                        <div><strong>Défaites : </strong>{rowData.losing}</div>
                        <div><strong>Neurones : </strong>{rowData.neurons.map(layer => layer.length).reduce((a, b) => a + b, 0)}</div>
                        <div><strong>Couches : </strong>{rowData.neurons.length}</div>
                    </Tooltip>
                }
            >
                <span>{rowData.name.substring(0, 4)}</span>
            </OverlayTrigger>
        )
    },
    {...winningColumn, 'hidden': true},
    {...generationColumn}
];

const columns = [
    {...nameColumn,
        'render': rowData => rowData.name.substring(0, 4)
    },
    {...winningColumn},
    {
        'title': 'Défaites',
        'field': 'losing'
    },
    {
        'title': 'Neurones',
        'render': rowData => rowData.neurons.map(layer => layer.length).reduce((a, b) => a + b, 0)
    },
    {
        'title': 'Couches',
        'field': 'neurons.length'
    },
    {...generationColumn}
];

const AgentList = ({ data, onClick }) => {
    return (
        <Container>
            <Row className="mx-0 d-none d-md-block">
                <Col className="p-0">
                    <DataTable
                        title="Liste des agents"
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
            <Row className="mx-0 d-block d-md-none">
                <Col className="p-0">
                    <DataTable
                        title="Liste des agents"
                        data={data}
                        columns={columnsBase}
                        actions={[
                            {
                                icon: 'casino',
                                tooltip: 'Tester',
                                onClick
                            }
                        ]}
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

AgentList.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default AgentList;