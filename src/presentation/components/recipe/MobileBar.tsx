import { recipesRoutes } from '@/presentation/router/router';
import { ExitIcon } from '@radix-ui/react-icons';

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
							<li
								key={option.to}
								className='cursor-pointer px-3 py-2 flex items-center 
									justify-center rounded-full hover:bg-white h-full
									transition-colors duration-500 relative z-10 group'>
								<span
									className={`bg-green-300 text-emerald-700 text-center -z-10 -top-[3.3rem]
											translate-y-16 opacity-0 invisible group-hover:translate-y-0 text-nowrap
											group-hover:visible group-hover:opacity-100 transition-all duration-500
											block absolute px-2 py-2 text-sm rounded-lg before:content-[""] 
											before:absolute before:w-0 before:h-0 before:border-x-8 before:border-x-transparent	 
											before:border-t-[12px] before:border-t-green-300 before:-bottom-2 before:left-1/2 before:-translate-x-1/2
										 `}>
									{option.title}
								</span>
								{option.icon}
							</li>
						),
				)}
				<li
					className='cursor-pointer px-3 py-2 flex items-center 
					justify-center hover:bg-white rounded-full h-full
					transition-colors duration-500 relative z-10 group'>
					<span
						className={`bg-green-300 text-emerald-700 text-center -z-10 -top-[3.3rem]
						translate-y-16 opacity-0 invisible group-hover:translate-y-0 text-nowrap
						group-hover:visible group-hover:opacity-100 transition-all duration-500
						block absolute px-2 py-2 text-sm rounded-lg before:content-[""] 
						before:absolute before:w-0 before:h-0 before:border-x-8 before:border-x-transparent	 
						before:border-t-[12px] before:border-t-green-300 before:-bottom-2 before:left-1/2 
						before:-translate-x-1/2`}>
						Log out
					</span>
					<ExitIcon
						width='1.2rem'
						height='1.2rem'
					/>
				</li>
			</ul>
		</div>
	);
};
