import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/recipe/Sidebar";
import { Toaster } from "../components/ui/toaster";

export const RecipeLayout = () => {  
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-h-screen w-full px-2 md:container">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
