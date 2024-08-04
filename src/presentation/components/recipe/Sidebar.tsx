import { useLoginMutation, useProfile } from '@/presentation/hooks';

import { AvatarMenu } from '../home/AvatarMenu';
import { SidebarMenuItem } from './SidebarMenuItem';

import { recipesRoutes } from '@/presentation/router/router';
import { TypographyH3 } from '../shared/TypographyH3';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
	const { token, logout } = useLoginMutation();
	const { queryProfile } = useProfile(token!, logout);

	return (
		<aside
			className={`z-10 top-0 sticky hidden md:block bg-slate-100 w-72 h-screen`}>
			<div className="bg-[url('/bg-logo.svg')] bg-no-repeat bg-cover px-5 py-4 shadow-md 
			rounded-bl-xl rounded-br-xl">
				<Link
					to='/'
					className='font-semibold text-emerald-600 text-2xl'>
					RecetIA
				</Link>
			</div>

			<nav>
				<div className='p-3'>
					{queryProfile.data ? (
						<AvatarMenu
							user={queryProfile.data!}
							isLoading={queryProfile.isLoading}
							logout={logout}
						/>
					) : (
						<TypographyH3 className='font-semibold text-emerald-600'>
							Bienvenido
						</TypographyH3>
					)}
				</div>

				<section className='py-3'>
					{recipesRoutes.map(
						(option) =>
							option.icon && (
								<SidebarMenuItem
									key={option.to}
									{...option}
								/>
							),
					)}
				</section>
			</nav>
		</aside>
	);
};
