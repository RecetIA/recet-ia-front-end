import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { NewPassword } from "../pages/auth/NewPassword";
import { ConfirmAccount } from "../pages/auth/ConfirmAccount";

import { HomeLayout } from "../layouts/HomeLayout";
import { Home } from "../pages/home/Home";

const authRoutes = [
  {
    to: "/auth/login",
    component: <Login />,
  },
  {
    to: "/auth/registrar",
    component: <Register />,
  },
  {
    to: "/auth/olvide-password",
    component: <ResetPassword />,
  },
  {
    to: "/auth/olvide-password/:token",
    component: <NewPassword />,
  },
  {
    to: "/auth/confirmar/:id",
    component: <ConfirmAccount />,
  },
];

const homeRoutes = [
  {
    to: "/",
    component: <Home />,
  },

];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      ...homeRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        index: true,
        path: homeRoutes.at(0)?.to,
        element: homeRoutes.at(0)?.component,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      ...authRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
    ],
  },
]);
