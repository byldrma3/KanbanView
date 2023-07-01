/* eslint-disable react/prop-types */
const RepeatIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_106_63)'>
				<path d='M1.33484 8.5828V7.22287C1.33484 5.01373 3.1257 3.22287 5.33484 3.22287H14.0015' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M12.6665 1.33334L14.6665 3.33334L12.6665 5.33334' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M14.6667 7.2343V8.59427C14.6667 10.8034 12.8758 12.5943 10.6667 12.5943H2' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M3.33484 14.6629L1.33484 12.6629L3.33484 10.6629' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_106_63'>
					<rect width={size} height={size} fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default RepeatIcon;
