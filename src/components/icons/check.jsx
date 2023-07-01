/* eslint-disable react/prop-types */
const CheckIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='dashboard' clipPath='url(#clip0_130_159)'>
				<path id='Vector' d='M2.5 7L5 7H7.5' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M3.5 4.09091L4.4375 5L6.5 3' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_3' d='M8.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V8.5C0.5 9.05228 0.947715 9.5 1.5 9.5H8.5C9.05228 9.5 9.5 9.05228 9.5 8.5V1.5C9.5 0.947715 9.05228 0.5 8.5 0.5Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default CheckIcon;
