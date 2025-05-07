import React, { useState } from 'react';
import { ReusableTabs } from '../components/reusable-tabs';

interface TabsPageProps {}

const TabsPage: React.FC<TabsPageProps> = ({}) => {
	const tabData = [
		{ label: 'Tab A', content: 'Content of Tab A' },
		{ label: 'Tab B', content: 'Content of Tab B' },
		{ label: 'Tab C', content: 'Content of Tab C' },
	];

	return (
		<div className='layout py-8'>
			<div className='space-y-6'>
				<h1 className='text-2xl font-bold'>Tabs</h1>

				<ReusableTabs tabs={tabData} defaultIndex={0} />
			</div>
		</div>
	);
};

export default TabsPage;
