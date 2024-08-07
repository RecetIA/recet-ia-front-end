import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/recipe/Sidebar';
import { Toaster } from '../components/ui/toaster';

import { TooltipProvider } from '../components/ui/tooltip';
import { MobileBar } from '../components/recipe/MobileBar';

export const RecipeLayout = () => {
	return (
    <div className="flex">
      <Sidebar />

      <main className="min-h-screen w-full pb-14 md:pb-0 px-2 md:container">
        <TooltipProvider delayDuration={200} skipDelayDuration={1000}>
          <Outlet />
        </TooltipProvider>
      </main>

      <MobileBar />

      <Toaster />
    </div>
  );
};
