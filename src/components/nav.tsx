import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons } from './icons';

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
	const path = useLocation().pathname;

	return (
		<header className='sticky top-0 z-50 w-full bg-white py-3 text-slate-900 shadow-sm'>
			<div className='layout flex items-center justify-between'>
				<div className={'flex gap-4'}>
					{links.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							className={
								path === link.href
									? 'font-medium text-sky-500 underline transition-colors'
									: 'text-gray-600'
							}
						>
							{link.label}
						</Link>
					))}
				</div>
				<Link
					to='https://github.com/choiruladamm/vite-ts-tailwind-starter'
					target='_blank'
				>
					<Icons.gitHub className='h-5 w-5' />
				</Link>
			</div>
		</header>
	);
};

const links = [
	{
		href: '/',
		label: 'Counter',
	},
	{
		href: '/js-function',
		label: 'Javascript Function',
	},
	{
		href: '/tabs',
		label: 'Tabs',
	},
	{
		href: '/modal',
		label: 'Modal Dialog',
	},
	{
		href: '/data-table',
		label: 'Data Tables',
	},
];
