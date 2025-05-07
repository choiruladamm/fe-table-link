import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { User } from '@/types/user';
import React, { useMemo, useState } from 'react';

interface DataTableProps {
	users: User[];
}

const DataTable: React.FC<DataTableProps> = ({ users }) => {
	const [search, setSearch] = useState('');
	const [pageSize, setPageSize] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

	// filter
	const filteredUsers = useMemo(() => {
		return users.filter((user) =>
			user.name.toLowerCase().includes(search.toLowerCase()),
		);
	}, [search, users]);

	// logic for pagination
	const totalPages = Math.ceil(filteredUsers.length / pageSize);
	const currentData = useMemo(() => {
		const start = (currentPage - 1) * pageSize;
		return filteredUsers.slice(start, start + pageSize);
	}, [currentPage, pageSize, filteredUsers]);

	return (
		<div className='space-y-6'>
			<div className='flex flex-wrap items-center justify-between gap-4'>
				<Input
					type='text'
					placeholder='Search by name...'
					className='w-full text-sm sm:w-64'
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
						setCurrentPage(1);
					}}
				/>

				<Select
					value={pageSize.toString()}
					onValueChange={(value) => {
						setPageSize(Number(value));
						setCurrentPage(1);
					}}
				>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Page size' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='5'>5 per page</SelectItem>
						<SelectItem value='10'>10 per page</SelectItem>
						<SelectItem value='20'>20 per page</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className='overflow-x-auto rounded-md border'>
				<table className='min-w-full text-sm text-gray-800'>
					<thead className='border-b bg-gray-50 text-left'>
						<tr>
							<th className='w-12 px-4 py-3'>Nomor</th>
							<th className='px-4 py-3'>Name</th>
							<th className='w-24 px-4 py-3'>Age</th>
							<th className='px-4 py-3'>Occupation</th>
						</tr>
					</thead>
					<tbody>
						{currentData.length > 0 ? (
							currentData.map((user) => (
								<tr
									key={user.id}
									className='border-b transition-colors hover:bg-gray-50'
								>
									<td className='px-4 py-2'>{user.id}</td>
									<td className='px-4 py-2'>{user.name}</td>
									<td className='px-4 py-2'>{user.age}</td>
									<td className='px-4 py-2'>{user.occupation}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={4} className='px-4 py-6 text-center text-gray-500'>
									No users found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<div className='flex items-center justify-between'>
				<p className='text-sm'>
					Page {currentPage} of {totalPages}
				</p>
				<div className='flex gap-2'>
					<Button
						variant='outline'
						size='sm'
						onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
						disabled={currentPage === 1}
					>
						Previous
					</Button>
					<Button
						variant='outline'
						size='sm'
						onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
						disabled={currentPage === totalPages}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
