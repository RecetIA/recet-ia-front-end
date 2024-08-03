import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/recipe/Sidebar";
import { Toaster } from "../components/ui/toaster";

import { TooltipProvider } from "../components/ui/tooltip";

export const RecipeLayout = () => {
  return (
		<div className='flex'>
			{/**<Sidebar /> */}
      
      <div className="flex md:hidden fixed bottom-0 bg-slate-200 w-full h-16">
        <ul>

        </ul>
      </div>

			<main className='min-h-screen w-full px-2 md:container'>
				<TooltipProvider
					delayDuration={200}
					skipDelayDuration={1000}>
					<Outlet />
				</TooltipProvider>
			</main>
			<Toaster />
		</div>
	);
};
