/* eslint-disable react/prop-types */
const HourglassIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='hourglass'>
				<path id='Vector' d='M6.9856 3.25878V2.08333C6.9856 1.6231 6.61251 1.25 6.15227 1.25H3.84835C3.38811 1.25 3.01501 1.6231 3.01501 2.08333V3.25878L4.75623 5L3.01501 6.74122V7.91667C3.01501 8.3769 3.38811 8.75 3.84835 8.75H6.15227C6.61251 8.75 6.9856 8.3769 6.9856 7.91667V6.74122L5.24439 5L6.9856 3.25878Z' stroke={color} strokeWidth='0.7' strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default HourglassIcon;
