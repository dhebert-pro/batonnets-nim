import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

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

const DataTable = ({title, data, columns, actions, options}) => (
    <MaterialTable
        title={title}
        data={data}
        columns={columns}
        localization={localization}
        actions={actions}
        options={options}
    />
);

DataTable.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    actions: PropTypes.array,
    options: PropTypes.object
};

export default DataTable;