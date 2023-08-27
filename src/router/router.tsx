import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import DetailPage from "../pages/DetailPage/DetailPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie-detail/:id", element: <DetailPage /> },
    ],
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
