import React from 'react';
import users from '@/data/data.json';
import {
	getOldestUser,
	getYoungestUser,
	sortUsersByMaxAge,
	sortUsersByMinAge,
} from '../utils/user-utils';
import { SectionCard } from '../components/section';

interface JSFunctionPageProps {}

const JSFunctionPage: React.FC<JSFunctionPageProps> = ({}) => {
	return (
		<div className='layout space-y-6 py-8'>
			<h1 className='mb-4 text-2xl font-bold'>Utils Users</h1>

			<SectionCard title='1. Find Youngest User'>
				<p>
					<b>Youngest:</b> {getYoungestUser(users)}
				</p>
			</SectionCard>

			<SectionCard title='2. Find Oldest User'>
				<p>
					<b>Oldest:</b> {getOldestUser(users)}
				</p>
			</SectionCard>

			<SectionCard title='3. Sort Users by Age (Youngest First)'>
				<ul className='list-inside list-disc space-y-1'>
					{sortUsersByMinAge(users).map((u) => (
						<li key={u.id}>
							{u.name} — {u.age}
						</li>
					))}
				</ul>
			</SectionCard>

			<SectionCard title='4. Sort Users by Age (Oldest First)'>
				<ul className='list-inside list-disc space-y-1'>
					{sortUsersByMaxAge(users).map((u) => (
						<li key={u.id}>
							{u.name} — {u.age}
						</li>
					))}
				</ul>
			</SectionCard>
		</div>
	);
};

export default JSFunctionPage;
