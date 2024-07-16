import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
    <main className=" bg-slate-300 p-4 sm:p-8 min-h-screen flex items-center justify-center">
      <section className="h-full mx-auto grid md:grid-cols-[1fr_minmax(200px,_1fr)] bg-white rounded-lg">
        <div className="flex items-center justify-center w-full">
          <Outlet />
        </div>
        <figure className="hidden md:block">
          <img
            className="object-cover object-center w-full h-full rounded-tr-lg rounded-br-lg"
            src="/frame-auth.png"
            alt="frame auth"
          />
        </figure>
      </section>
    </main>
  );
};
