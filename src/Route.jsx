import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/work", element: <Work /> },
      { path: "/project", element: <Project /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
