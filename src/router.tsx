import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Private, Register } from "./pages";
import Layout from "@/components/Layout/Layout";
import Movies from "@/pages/Movies/Movies";
import Series from "@/pages/Series/Series";
import Bookmark from "./pages/Bookmark/Bookmark";

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
            element: <Movies />,
            children: [
              {
                path: "movies/:id",
                element: <p>Specific Movie</p>,
              },
            ],
          },
          {
            path: "series",
            element: <Series />,
            children: [
              {
                path: "series/:id",
                element: <p>Specific Series</p>,
              },
            ],
          },
          {
            path: "bookmark",
            element: <Bookmark />,
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
  {
    path: "*",
    element: <p>404</p>,
  },
]);

export default router;
