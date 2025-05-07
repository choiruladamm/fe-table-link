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
						className={`relative px-3 py-1 font-mono text-base tracking-wide transition-all duration-200 ${
							activeIndex === index
								? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-blue-600'
								: 'text-gray-400 hover:text-gray-600'
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
