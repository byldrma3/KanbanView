/* eslint-disable react/prop-types */
const ChatIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M6.06658 12.4389C5.94779 12.4101 5.82239 12.4222 5.71307 12.4769L3.52037 13.5732C3.15962 13.7536 2.74475 13.4546 2.80179 13.0553L3.06373 11.2217C3.08778 11.0533 3.02352 10.8854 2.90018 10.7684C1.92258 9.8404 1.3335 8.6419 1.3335 7.33333C1.3335 4.38781 4.31826 2 8.00016 2C11.6821 2 14.6668 4.38781 14.6668 7.33333C14.6668 10.2789 11.6821 12.6667 8.00016 12.6667C7.32774 12.6667 6.67856 12.587 6.06658 12.4389Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	);
};

export default ChatIcon;
