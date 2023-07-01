import Icon from "feather-icons-react";
import Button from "./form/button";
import Input from "./form/input";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ onOpen }) => {
	return (
		<header className='box-border flex border-b border-line py-3'>
			<div className='border-r border-line pl-[14px] pr-[17px]'>
				<Link to='/'>
					<img src='/logo.svg' alt='Producter Logo' className='h-[32px]' />
				</Link>
			</div>
			<div className='flex flex-grow justify-end px-6 sm:justify-between'>
				<div className='hidden gap-2 sm:flex'>
					<Input icon='search' id='search' type='text' placeholder='Search' />
					<Button variant='secondary' size='sm'>
						<Icon icon='sliders' className='px-[5px]' />
					</Button>
					<Button variant='secondary' size='sm'>
						<Icon icon='filter' className='px-[5px]' />
					</Button>
				</div>
				<Button variant='bordered' size='sm' onClick={() => onOpen()}>
					<Icon icon='plus' className='px-[3px]' />
				</Button>
			</div>
		</header>
	);
};

export default Header;
