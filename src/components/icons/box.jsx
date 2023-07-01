/* eslint-disable react/prop-types */
const BoxIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='box' clipPath='url(#clip0_130_148)'>
				<path id='Vector' d='M5 0.833336L8.75 2.91667V7.08334L5 9.16667L1.25 7.08334V2.91667L5 0.833336Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M1.25 2.91666L5 5L8.75 2.91666' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_3' d='M5 5V9.16667' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default BoxIcon;
