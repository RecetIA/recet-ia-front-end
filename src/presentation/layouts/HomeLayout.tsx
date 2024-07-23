import { Outlet } from "react-router-dom";
import { Header } from "../components/home/Header";

export const HomeLayout = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <main className="bg-gray-100 min-h-[calc(100vh-4rem)] relative overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
