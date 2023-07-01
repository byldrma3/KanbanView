import Button from "./form/button";
import Icon from "feather-icons-react";
import ChatIcon from "./icons/chat";
import DashboardIcon from "./icons/dashboard";
import RepeatIcon from "./icons/repeat";
import { Link } from "react-router-dom";
import BellIcon from "./icons/bell";
import ChatAltIcon from "./icons/chat-alt";

const Sidebar = () => {
	return (
		<aside className='sidebar sticky top-0 shrink-0'>
			<div className='flex flex-col'>
				<Link to='/' className='flex flex-col'>
					<Button type='button' variant='ghost' size='md'>
						<Icon size='16' icon='home' strokeWidth='1.5' />
						Dashboard
					</Button>
				</Link>
				<Link to='/' className='flex flex-col'>
					<Button type='button' variant='ghost' size='md'>
						<ChatIcon size='16' />
						Feedback
					</Button>
				</Link>
				<Link to='/' className='flex flex-col'>
					<Button type='button' variant='ghost' size='md' active={true}>
						<DashboardIcon size='16' />
						Task
					</Button>
				</Link>
				<Link to='/' className='flex flex-col'>
					<Button type='button' variant='ghost' size='md'>
						<Icon size='16' icon='compass' strokeWidth='1.5' />
						Roadmap
					</Button>
				</Link>
				<Link to='/' className='flex flex-col'>
					<Button type='button' variant='ghost' size='md'>
						<RepeatIcon size='16' />
						Changelog
					</Button>
				</Link>
			</div>
			<div className='flex flex-col divide-y divide-[#F6F9FB]'>
				<div className='flex flex-col'>
					<Button type='button' variant='ghost' size='md'>
						<Icon size='16' icon='plus' strokeWidth='1.5' />
						Invite people
					</Button>
					<Button type='button' variant='ghost' size='md'>
						<ChatAltIcon size='16' />
						Help & Community
					</Button>
					<Button type='button' variant='ghost' size='md'>
						<BellIcon size='16' />
						Notifications
					</Button>
				</div>
				<Link to='/' className='flex items-center gap-[6px] py-4'>
					<img src='/hero.png' alt='hero' className='h-6 w-6 rounded-full object-cover' />
					<p className='text-[13px] tracking-[0.26px] text-[#001747] hover:underline'>Neil Larkins</p>
				</Link>
				<Link to='/' className='flex items-center gap-[6px] pt-4'>
					<span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FFC84A] text-sm font-medium text-white'>E</span>
					<p className='text-[13px] tracking-[0.26px] text-[#001747] hover:underline'>Epodpay Inc.</p>
				</Link>
			</div>
		</aside>
	);
};

export default Sidebar;
