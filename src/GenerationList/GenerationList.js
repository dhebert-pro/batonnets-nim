import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

const GenerationList = ({ data, columns, onClick }) => (
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
);

GenerationList.propTypes = {
	data: PropTypes.object.isRequired,
	columns: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

export default GenerationList;