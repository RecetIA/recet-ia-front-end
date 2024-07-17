import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/recipe/Sidebar";

export const RecipeLayout = () => {  
  return (
    <div className="flex">
      <Sidebar/>
      <main className="bg-gray-100 min-h-screen w-full container">
        <Outlet />
      </main>
    </div>
  );
}
