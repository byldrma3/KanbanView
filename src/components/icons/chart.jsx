/* eslint-disable react/prop-types */
const ChartIcon = ({ size, color = "#FF6464", num = 1 }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='chart'>
				<path id='Vector' d='M1.33344 8V14H4.0001V8H1.33344Z' fill={num >= 1 ? color : "#DDDDDD"} stroke={num >= 1 ? color : "#DDDDDD"} strokeWidth='0.5' strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M12 2V14H14.6667V2H12Z' fill={num >= 3 ? color : "#DDDDDD"} stroke={num >= 3 ? color : "#DDDDDD"} strokeWidth='0.5' strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_3' d='M6.66656 5V14H9.33323V5H6.66656Z' fill={num >= 2 ? color : "#DDDDDD"} stroke={num >= 2 ? color : "#DDDDDD"} strokeWidth='0.5' strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default ChartIcon;
