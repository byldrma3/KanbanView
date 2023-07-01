/* eslint-disable react/prop-types */
const ArrowLeftIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='arrow-left'>
				<path id='Vector' d='M9 6L3 12L9 18' stroke={color} strokeWidth='1.3' strokeLinejoin='round' />
				<path id='Vector_2' d='M21.0001 12H4.00006' stroke={color} strokeWidth='1.3' strokeLinejoin='bevel' />
				<path id='Vector_3' d='M3 12H4' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default ArrowLeftIcon;
