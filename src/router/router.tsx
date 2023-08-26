import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
