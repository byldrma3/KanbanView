/* eslint-disable react/prop-types */
import Icon from "feather-icons-react";

const Input = ({ icon = "search", ...props }) => {
	return (
		<label htmlFor={props?.id} className={`form-label ${props.size == "lg" ? "lg" : ""}`}>
			<Icon icon={icon} size='14' color='#8C97AC' />
			<input className='form-input' {...props} />
		</label>
	);
};

export default Input;
