import React from 'react';

interface SectionCardProps {
	title: string;
	children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
	title,
	children,
}) => {
	return (
		<div className='rounded-xl border border-gray-200 bg-white p-5 shadow-sm'>
			<h2 className='mb-3 text-lg font-semibold'>{title}</h2>
			<div className='space-y-1 text-sm text-gray-800'>{children}</div>
		</div>
	);
};
