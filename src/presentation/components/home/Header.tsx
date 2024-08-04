
import { useLoginMutation, useProfile } from "@/presentation/hooks";

import { buttonVariants } from "../ui/button";
import { AvatarMenu } from "./AvatarMenu";

import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const { token, logout} = useLoginMutation();
  const { queryProfile } = useProfile(token!);

  return (
    <header className="bg-white relative flex justify-between items-center py-3 px-2 md:px-8 z-20">
      <div>
        <Link className="text-2xl font-bold text-slate-900" to="/">
          RecetIA
        </Link>
      </div>

      <nav className="flex items-center gap-4">
        {token ? (
          <AvatarMenu
            user={queryProfile.data!}
            isLoading={queryProfile.isLoading}
            logout={logout}
          />
        ) : (
          <div className="space-x-4">
            <NavLink
              to="/auth/login"
              className={buttonVariants({
                size: "sm",
                className: "bg-emerald-600 hover:bg-emerald-700 !text-base",
              })}
            >
              Iniciar sesión
            </NavLink>
            <NavLink
              to="/auth/registrar"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className:
                  "!border-emerald-600 text-emerald-600 hover:border-emerald-700 hover:text-emerald-700 !text-base",
              })}
            >
              Registrarse
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};
