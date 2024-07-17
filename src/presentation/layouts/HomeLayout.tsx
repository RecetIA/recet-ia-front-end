import { Outlet } from "react-router-dom";
import { Header } from "../components/home/Header";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 min-h-[calc(100vh-3.5rem)]">
        <Outlet />
      </main>
    </>
  );
};
