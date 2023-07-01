/* eslint-disable react/prop-types */
const VerticalListIcon = ({ size, color = "#405175" }) => {
	return (
		<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g id='dashboard' clipPath='url(#clip0_2_198)'>
				<path id='Vector' d='M13.6667 1.33334H2.33334C1.78106 1.33334 1.33334 1.78106 1.33334 2.33334V13.6667C1.33334 14.219 1.78106 14.6667 2.33334 14.6667H13.6667C14.219 14.6667 14.6667 14.219 14.6667 13.6667V2.33334C14.6667 1.78106 14.219 1.33334 13.6667 1.33334Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_2' d='M7.33334 4.66666H11.3333M7.33334 7.99999H11.3333M7.33334 11.3333H11.3333' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
				<path id='Vector_3' d='M4.66666 11.3333H5.33332M4.66666 4.66666H5.33332H4.66666ZM4.66666 7.99999H5.33332H4.66666Z' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
			</g>
		</svg>
	);
};

export default VerticalListIcon;
