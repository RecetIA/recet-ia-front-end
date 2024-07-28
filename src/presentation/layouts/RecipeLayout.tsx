import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/recipe/Sidebar";
import { Toaster } from "../components/ui/toaster";

import { TooltipProvider } from "../components/ui/tooltip";

export const RecipeLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-h-screen w-full px-2 md:container">
        <TooltipProvider delayDuration={200} skipDelayDuration={1000}>
          <Outlet />
        </TooltipProvider>
      </main>
      <Toaster />
    </div>
  );
};
