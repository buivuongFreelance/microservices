import { createBrowserRouter } from "react-router-dom";
import HomePage from "./features/home/pages/home-page";
import ErrorPage from "./features/error/pages/error-page";
import LoginPage from "./features/auth/pages/login-page";
import { HomeRoutes } from "./features/home/routes";
import { AuthRoutes } from "./features/auth/routes";

export const router = createBrowserRouter([
  {
    path: HomeRoutes.home,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: AuthRoutes.login,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);
