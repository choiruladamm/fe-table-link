import { NotFoundPage } from '@/components';
import CounterPage from '@/features/counter/pages/counter-page';
import DataTablesPage from '@/features/data-tables/pages/data-tables-page';
import JSFunctionPage from '@/features/javascript-function/pages/js-function-page';
import ModalDialogPage from '@/features/modal-dialog/pages/modal-dialog-page';
import TabsPage from '@/features/tabs/pages/tabs-page';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './root-layout';

interface RootRouterProps {}

const RootRouter: FC<RootRouterProps> = ({}) => {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <RootLayout />,
				children: [
					{
						index: true,
						element: <CounterPage />,
					},
					{
						path: 'js-function',
						element: <JSFunctionPage />,
					},
					{
						path: 'tabs',
						element: <TabsPage />,
					},
					{
						path: 'modal',
						element: <ModalDialogPage />,
					},
					{
						path: 'data-table',
						element: <DataTablesPage />,
					},
					{
						path: '*',
						element: <NotFoundPage />,
					},
				],
			},
		],
		{
			future: {
				v7_relativeSplatPath: true,
			},
		},
	);

	return (
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		/>
	);
};

export default RootRouter;
