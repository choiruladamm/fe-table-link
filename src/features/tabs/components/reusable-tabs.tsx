import React from 'react';

interface TabItem {
	label: string;
	content: React.ReactNode;
}

interface ReusableTabsProps {
	tabs: TabItem[];
	defaultIndex?: number;
}

export const ReusableTabs: React.FC<ReusableTabsProps> = ({
	tabs,
	defaultIndex,
}) => {
	const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

	return (
		<div>
			<div className='flex space-x-4 border-b border-gray-300 pb-2'>
				{tabs.map((tab, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`border-b-2 pb-1 text-sm transition ${
							activeIndex === index
								? 'border-blue-600 font-semibold text-blue-600'
								: 'border-transparent text-gray-500'
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<div className='mt-6 text-gray-800'>
				{tabs[activeIndex ?? 0]?.content}
			</div>
		</div>
	);
};
