import { useLoginMutation } from '@/presentation/hooks';

import { Tooltip } from '../shared/Tooltip';
import { recipesRoutes } from '@/presentation/router/router';

import { NavLink } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export const MobileBar = () => {
  const { logout } = useLoginMutation();

	return (
    <div className="md:hidden fixed left-0 bottom-0 bg-green-300 h-14 w-full">
      <ul
        className="flex justify-around items-center py-2 w-full h-full 
				bg-primary font-bold"
      >
        {recipesRoutes.map(
          (option) =>
            option.icon && (
              <li key={option.to}>
                <NavLink
                  className={({
                    isActive,
                  }) => `cursor-pointer flex items-center 
									justify-center rounded-full ${isActive ? "bg-emerald-700" : ""}
									hover:bg-emerald-700 transition-colors duration-500 relative 
									z-10 group w-9 h-9 text-white`}
                  to={option.to}
                >
                  <Tooltip className="bg-gray-700 before:border-t-gray-700">
                    {option.title}
                  </Tooltip>
                  {option.icon}
                </NavLink>
              </li>
            )
        )}
        <li
          className="cursor-pointer flex items-center 
					justify-center hover:bg-emerald-700 rounded-full
					transition-colors duration-500 relative z-10 group w-9 h-9 text-white "
          onClick={() => logout()}
        >
          <Tooltip className="bg-gray-700 before:border-t-gray-700">
            Salir
          </Tooltip>
          <LogOut width="1.2rem" height="1.2rem" />
        </li>
      </ul>
    </div>
  );
};
