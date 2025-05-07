import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const [show, setShow] = useState(false);

	// animation
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		if (isOpen) {
			setShow(true);
		} else {
			timeout = setTimeout(() => setShow(false), 200);
		}
		return () => clearTimeout(timeout);
	}, [isOpen]);

	if (!isOpen && !show) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			<div
				className={`absolute inset-0 h-dvh w-full bg-black transition-opacity duration-200 ${
					isOpen ? 'opacity-50' : 'opacity-0'
				}`}
				onClick={onClose}
			/>

			<div
				className={`relative z-10 mx-auto w-full max-w-md transform rounded-xl bg-white p-6 shadow-lg transition-all duration-200 ${
					isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
				}`}
			>
				<div className='mb-4 flex items-center justify-between'>
					<h2 className='text-lg font-bold'>{title}</h2>
					<X
						onClick={onClose}
						className='size-5 cursor-pointer text-gray-500 hover:text-gray-700'
					/>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
