/* eslint-disable react/prop-types */
const DashboardIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='dashboard' clipPath='url(#clip0_2_853)'>
				<path id='Vector' d='M8.57141 5.14285H10.8571H13.1428M8.57141 10.8571H10.8571H13.1428' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M2.85712 5.24675L3.92855 6.28571L6.28569 4' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_3' d='M2.85712 10.961L3.92855 12L6.28569 9.71429' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_4' d='M14.4286 0.571442H1.57141C1.01913 0.571442 0.571411 1.01916 0.571411 1.57144V14.4286C0.571411 14.9809 1.01913 15.4286 1.57141 15.4286H14.4286C14.9808 15.4286 15.4286 14.9809 15.4286 14.4286V1.57144C15.4286 1.01916 14.9808 0.571442 14.4286 0.571442Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_2_853'>
					<rect width={size} height={size} fill={color} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default DashboardIcon;
