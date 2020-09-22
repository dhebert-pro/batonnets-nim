import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

const GenerationList = ({ data, columns, onClick, nbGenerations, onChangeNbGenerations, onGenerate }) => (
    <section>
        <section>
            <form autoComplete='off' onSubmit={onGenerate}>
                Nombre de générations :
                <input type="text" name="nb-generations" value={nbGenerations} onChange={onChangeNbGenerations} />
                <input type="submit" value="Simuler" />
            </form>
        </section>
        <section>
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
        </section>
    </section>
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