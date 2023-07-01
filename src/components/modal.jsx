import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
export function Modal({ onClose, isOpen, children, title }) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} tabIndex='-1' className={`montserrat fixed left-0 right-0 top-0 z-50  flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/20 p-4 backdrop-blur-sm md:inset-0`}>
					<motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} transition={{ duration: 0.15 }} className='relative h-full w-full max-w-2xl'>
						<div className='relative rounded-lg bg-white'>
							<div className='flex items-start justify-between border-b border-line p-4'>
								<h3 className='text-base font-semibold text-[#001747]'>{title}</h3>
								<button onClick={onClose} type='button' className='ml-auto inline-flex items-center rounded-md bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 '>
									<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
										<path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path>
									</svg>
									<span className='sr-only'>Close modal</span>
								</button>
							</div>
							{children}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

// eslint-disable-next-line react/prop-types
export function ModalContent({ children }) {
	return <div className='max-h-[500px] space-y-6 overflow-y-scroll px-4 py-6 !leading-relaxed text-[#405175]'>{children}</div>;
}

// eslint-disable-next-line react/prop-types
export function ModalFooter({ children }) {
	return <div className='flex items-center justify-end space-x-2 border-t border-line p-6'>{children}</div>;
}
