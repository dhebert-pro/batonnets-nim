import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const columns = [
    {
        'title': 'Nom',
        'field': 'name'
    },
    {
        'title': 'Victoires',
        'field': 'winning'
    },
    {
        'title': 'Défaites',
        'field': 'losing'
    },
    {
        'title': 'Neurones',
        'field': 'nbNeurons'
    },
    {
        'title': 'Couches',
        'field': 'nbLayers'
    },
    {
        'title': 'Génération',
        'field': 'generation'
    }
];

const localization = {
    'body': {
        'emptyDataSourceMessage': 'Aucun enregistrement à afficher'
    },
    'pagination': {
        'labelDisplayedRows': '{from}-{to} sur {count}',
        'labelRowsSelect': 'lignes',
        'firstAriaLabel': 'Première page',
        'firstTooltip': 'Première page',
        'previousAriaLabel': 'Page précédente',
        'previousTooltip': 'Page précédente',
        'nextAriaLabel': 'Page suivante',
        'nextTooltip': 'Page suivante',
        'lastAriaLabel': 'Dernière page',
        'lastTooltip': 'Dernière page'
    },
    'toolbar': {
        'searchTooltip': 'Rechercher',
        'searchPlaceholder': 'Rechercher'
    }
};

const AgentList = ({ data, onClick }) => (
    <Container>
        <Row className="mx-0">
            <Col className="p-0">
                <MaterialTable
                    title="Liste des agents"
                    data={data}
                    columns={columns}
                    localization={localization}
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

AgentList.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default AgentList;