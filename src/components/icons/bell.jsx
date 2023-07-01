/* eslint-disable react/prop-types */
const BellIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='bell'>
				<path id='Vector' d='M12 6.13332C12 7.09629 12 8.05925 12 9.02221C12 9.76762 12.1849 10.3527 12.5548 10.7776C12.6973 10.9413 12.5858 11.3333 12.3688 11.3333H3.6312C3.41415 11.3333 3.30265 10.9413 3.44517 10.7776C3.81504 10.3527 3.99998 9.76762 3.99998 9.02221C3.99998 8.05925 3.99998 7.09629 3.99998 6.13332C3.99998 4.21874 5.79084 2.66666 7.99998 2.66666C10.2091 2.66666 12 4.21874 12 6.13332Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M6.33335 11.3333C6.33335 12.4379 7.07955 13.3333 8.00002 13.3333C8.92049 13.3333 9.66669 12.4379 9.66669 11.3333' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default BellIcon;
