import React from 'react';
import Modal from '../components/modal';
import { Button } from '@/components/ui/button';

interface ModalDialogPageProps {}

const ModalDialogPage: React.FC<ModalDialogPageProps> = ({}) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	return (
		<div className='layout py-8'>
			<div className='space-y-6'>
				<h1 className='text-2xl font-bold'>Modal Dialog</h1>

				<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			</div>

			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title='Lorem ipsum dolor sit amet'
			>
				<div className='space-y-5'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						odio consequatur repellat nihil harum enim quibusdam amet autem
						atque cumque.
					</p>
					<Button
						variant='secondary'
						size='sm'
						onClick={() => setIsOpen(false)}
					>
						Close
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default ModalDialogPage;
