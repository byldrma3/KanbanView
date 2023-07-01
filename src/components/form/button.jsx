/* eslint-disable react/prop-types */
const Button = (props) => {
	const variant = props.variant == "primary" ? "primary" : props.variant == "secondary" ? "secondary" : props.variant == "bordered" ? "bordered" : props.variant === "ghost" ? "ghost" : props.variant === "subtle" ? "subtle" : "danger";
	const size = props.size == "sm" ? "sm" : props.size == "md" ? "md" : "lg";
	return (
		<button type={props.type} className={`btn ${size} ${variant} ${props.active === true ? "active" : ""}`} onClick={props.onClick} disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
