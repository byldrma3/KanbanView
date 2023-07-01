import { Link } from "react-router-dom";
import ArrowLeftIcon from "./icons/arrowLeft";
import HourglassIcon from "./icons/hourglass";
import PeopleIcon from "./icons/people";
import VerticalListIcon from "./icons/verticalList";
import GridIcon from "./icons/grid";
import Icon from "feather-icons-react";
import Button from "./form/button";

const Breadcrumb = () => {
	return (
		<div className='breadcrumb'>
			<div className='flex flex-shrink-0 flex-grow  gap-2'>
				<div className='flex items-center pr-4 sm:border-r sm:border-line-dark'>
					<Link to='/'>
						<ArrowLeftIcon size='24' />
					</Link>
				</div>
				<div className='hidden items-center justify-center gap-1 border-r border-line-dark pr-2 sm:flex'>
					<span className='grid h-4 w-4 place-items-center rounded-[4px] bg-[#405175]'>
						<HourglassIcon size='10' color='white' />
					</span>
					<p>SPR-06</p>
				</div>
				<div className='hidden items-center justify-center gap-1 border-r border-line-dark pr-2 sm:flex'>
					<span className='grid h-4 w-4 place-items-center rounded-[4px] bg-[#2D70FD]'>
						<PeopleIcon size='10' color='white' />
					</span>
					<p>TEAM-10</p>
				</div>
				<div className='hidden items-center justify-center gap-6 sm:flex'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-3'>
							<p className='font-medium text-[#001747]'>New Sprint Name</p>
							<Icon icon='calendar' size='16' color='#FF6464' />
						</div>
						<PeopleIcon size='16' color='#405175' />
					</div>
					<Button variant='subtle' size='lg'>
						Complete Sprint
					</Button>
				</div>
			</div>
			<div className='flex h-6 items-center gap-2 border-l border-line-dark pl-2'>
				<button className='grid h-6 w-6 place-items-center rounded-[4px] bg-[#8C97AC]/10 hover:bg-[#8C97AC]/20'>
					<VerticalListIcon size='16' color='#8C97AC' />
				</button>
				<button className='grid h-6 w-6 place-items-center rounded-[4px] bg-brand hover:bg-brand/90'>
					<GridIcon size='16' color='white' />
				</button>
			</div>
		</div>
	);
};

export default Breadcrumb;
