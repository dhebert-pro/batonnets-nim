import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Table = styled.div`
    flex: 1;
`;

const GenerationList = ({ data, columns, onClick, nbGenerations, onChangeNbGenerations, onGenerate }) => (
    <Body>
        <div>
            <form autoComplete='off' onSubmit={onGenerate}>
                Nombre de générations :
                <input type="text" name="nb-generations" value={nbGenerations} onChange={onChangeNbGenerations} />
                <input type="submit" value="Simuler" />
            </form>
        </div>
        <Table>
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
        </Table>
        <div>
            Foot
        </div>
    </Body>
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