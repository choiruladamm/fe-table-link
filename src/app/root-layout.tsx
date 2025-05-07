import { Nav } from '@/components';
import { Outlet } from 'react-router-dom';
import React from 'react';

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
	return (
		<React.Fragment>
			<Nav />
			<div>
				<Outlet />
			</div>
		</React.Fragment>
	);
};

export default RootLayout;
