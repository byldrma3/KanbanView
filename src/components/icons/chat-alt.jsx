/* eslint-disable react/prop-types */
const ChatAltIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='chat-alt'>
				<path id='Vector' d='M8.66667 11.3334L4.66667 14V11.3334H2V2.66669H14V11.3334H8.66667Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M4.6665 5.33331H11.3332M4.6665 8.66665H7.99984H11.3332' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default ChatAltIcon;
