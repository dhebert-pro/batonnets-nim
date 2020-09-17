import React, {useState} from 'react';
import GenerationList from './GenerationList';

const initialData = [
	{ generation: 1, winning: Math.round(Math.random() * 30), losing: Math.round(Math.random() * 30) },
	{ generation: 2, winning: Math.round(Math.random() * 30), losing: Math.round(Math.random() * 30) },
	{ generation: 3, winning: Math.round(Math.random() * 30), losing: Math.round(Math.random() * 30) },
	{ generation: 4, winning: Math.round(Math.random() * 30), losing: Math.round(Math.random() * 30) },
	{ generation: 5, winning: Math.round(Math.random() * 30), losing: Math.round(Math.random() * 30) },
	{ generation: 6, winning: Math.round(Math.random() * 30), losing: Math.round(Math.random() * 30) }
];

const columns = [
	{
		title: '#',
		field: 'generation'
	},
	{
		title: 'Victoires',
		field: 'winning'
	},
	{
		title: 'Défaites',
		field: 'losing'
	}
];

const play = (event, row) => {
	console.log('PLAY', event.target, row);
};

const container = () => {
	const [data] = useState(initialData);
	return (
		<GenerationList data={data} columns={columns} onClick={play} />
	);
};

export default container;