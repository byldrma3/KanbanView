import { useState } from "react";

export function useDisclosure() {
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const onOpen = () => setIsOpen(true);
	const onToggle = () => setIsOpen(!isOpen);
	return { isOpen, onOpen, onClose, onToggle };
}
