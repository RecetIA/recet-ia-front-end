import React from "react";

import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarMenuItem = ({ to, icon, title }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const activeClasses = isActive ? "bg-primary/20 text-primary border-l-[3px] border-l-emerald-600" : "";

        return `flex items-center gap-2 p-2 pl-4 transition-colors ${activeClasses}`;
      }}
    >
      <span className="h-5">
        {icon}
      </span>
      <p className="text-base font-semibold">{title}</p>
    </NavLink>
  );
};
