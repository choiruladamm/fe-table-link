import { Button } from '@/components/ui/button';
import React from 'react';

interface CounterPageProps {}

const CounterPage: React.FC<CounterPageProps> = ({}) => {
	const [count, setCount] = React.useState<number>(0);

	const handleClick = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<div className='layout py-8'>
			<div className='space-y-6'>
				<h1 className='text-2xl font-bold'>Counter</h1>
				<Button onClick={handleClick}>Clicked {count} times</Button>
			</div>
		</div>
	);
};

export default CounterPage;
