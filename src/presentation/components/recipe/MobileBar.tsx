import { recipesRoutes } from '@/presentation/router/router';
import { ExitIcon } from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';
import { Tooltip } from './Tooltip';

export const MobileBar = () => {
	return (
		<div
			className='md:hidden fixed bottom-2 left-1/2 
			rounded-xl -translate-x-1/2 bg-green-300 sm:w-[60%] w-[80%] h-14'>
			<ul
				className='flex justify-around items-center py-2 w-full h-full 
				text-emerald-700 font-bold'>
				{recipesRoutes.map(
					(option) =>
						option.icon && (
							<li key={option.to} className='h-full'>
								<NavLink
									className={({
										isActive,
									}) => `cursor-pointer px-3 py-2 flex items-center 
									justify-center rounded-full ${isActive ? 'bg-white' : ''} 
									hover:bg-white h-full transition-colors duration-500 relative 
									z-10 group`}
									to={option.to}>
									<Tooltip>{option.title}</Tooltip>
									{option.icon}
								</NavLink>
							</li>
						),
				)}
				<li
					className='cursor-pointer px-3 py-2 flex items-center 
					justify-center hover:bg-white rounded-full h-full
					transition-colors duration-500 relative z-10 group'>
					<Tooltip>Salir</Tooltip>
					<ExitIcon
						width='1.2rem'
						height='1.2rem'
					/>
				</li>
			</ul>
		</div>
	);
};
