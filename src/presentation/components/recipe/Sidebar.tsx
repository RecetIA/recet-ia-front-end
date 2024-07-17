import { useLoginMutation, useProfile } from "@/presentation/hooks";

import { AvatarMenu } from "../home/AvatarMenu";
import { SidebarMenuItem } from "./SidebarMenuItem";

import { recipesRoutes } from "@/presentation/router/router";
import { TypographyH3 } from "../shared/TypographyH3";



export const Sidebar = () => {
  const { token, logout } = useLoginMutation();
  const { queryProfile } = useProfile(token!);

  return (
    <aside>
      <div className="bg-[url('/bg-logo.svg')] bg-no-repeat bg-cover px-5 py-4 shadow-md rounded-bl-xl rounded-br-xl">
        <TypographyH3 className="font-semibold text-emerald-600">
          RecetIA
        </TypographyH3>
      </div>

      <nav>
        <div className="p-3">
          <AvatarMenu
            user={queryProfile.data!}
            isLoading={queryProfile.isLoading}
            logout={logout}
          />
        </div>

        <section className="py-3">
          {recipesRoutes.map((option) => (
            <SidebarMenuItem key={option.to} {...option} />
          ))}
        </section>
      </nav>
    </aside>
  );
};
