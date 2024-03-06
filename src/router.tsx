import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Private, Register } from "./pages";
import Layout from "@/components/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Private />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "movies",
            element: <p>Movies</p>,
            children: [
              {
                path: "movies/:id",
                element: <p>Specific Movie</p>,
              },
            ],
          },
          {
            path: "series",
            element: <p>Series</p>,
            children: [
              {
                path: "series/:id",
                element: <p>Specific Series</p>,
              },
            ],
          },
          {
            path: "bookmarked",
            element: <p>Bookmarked</p>,
          },
          {
            path: "rated",
            element: <p>rated</p>,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
