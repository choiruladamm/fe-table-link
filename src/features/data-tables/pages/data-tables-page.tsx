import React from 'react';
import DataTable from '../components/data-table';
import users from '@/data/data.json';

interface DataTablesPageProps {}

const DataTablesPage: React.FC<DataTablesPageProps> = ({}) => {
	return (
		<div className='layout space-y-6 py-8'>
			<h1 className='text-2xl font-bold'>Users Data Table</h1>
			<DataTable users={users} />
		</div>
	);
};

export default DataTablesPage;
