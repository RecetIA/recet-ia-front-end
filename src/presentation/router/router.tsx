import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, HomeLayout, RecipeLayout } from "../layouts";

import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { NewPassword } from "../pages/auth/NewPassword";
import { ConfirmAccount } from "../pages/auth/ConfirmAccount";

import { Home } from "../pages/home/Home";

import { GenerateRecipe } from "../pages/recipe/GenerateRecipe";
import { FavoriteRecipes } from "../pages/recipe/FavoriteRecipes";
import { FullRecipe } from "../pages/recipe/FullRecipe";
import { SavedRecipes } from "../pages/recipe/SavedRecipes";

import { Bookmark, Heart, ReceiptText } from "lucide-react";


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

export const recipesRoutes = [
  {
    to: "/recetas/crear-receta",
    component: <GenerateRecipe />,
    title: "Generar Recetas",
    icon: <ReceiptText width="1.2rem" height="1.2rem" />,
  },
  {
    to: "/recetas/favoritos",
    component: <FavoriteRecipes />,
    title: "Mis favoritos",
    icon: <Heart width="1.2rem" height="1.2rem" />,
  },
  {
    to: "/recetas/guardados",
    component: <SavedRecipes />,
    title: "Guardados",
    icon: <Bookmark width="1.2rem" height="1.2rem" />,
  },
  {
    to: "/recetas/:id",
    component: <FullRecipe />,
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
  {
    path: "/recetas",
    element: <RecipeLayout />,
    children: [
      ...recipesRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
    ],
  },
]);
