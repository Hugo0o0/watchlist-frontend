import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login, Private, Register } from "./pages";
import Layout from "@/components/Layout/Layout";
import Movies from "@/pages/Movies/Movies";
import Series from "@/pages/Series/Series";
import Bookmark from "./pages/Bookmark/Bookmark";
import Rated from "./pages/Rated/Rated";
import PagesErrorFallback from "./components/ErrorBoundaries/PagesErrorFallback/PagesErrorFallback";
import NotFound from "./components/ErrorBoundaries/NotFound/NotFound";
import MovieDetails from "./pages/Movies/MovieDetails";
import SeriesDetails from "./pages/Series/SeriesDetails";

const router = createBrowserRouter([
  {
    element: <Private />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            errorElement: <PagesErrorFallback />,
            children: [
              {
                path: "movies",
                element: <Movies />,
                id: "movies",
              },
              {
                path: "movies/:id",
                element: <MovieDetails />,
              },
              {
                path: "series",
                id: "series",
                element: <Series />,
              },
              {
                path: "series/:id",
                element: <SeriesDetails />,
              },
              {
                path: "bookmark",
                id: "bookmark",
                element: <Bookmark />,
              },
              {
                path: "rated",
                id: "rated",
                element: <Rated />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    errorElement: <PagesErrorFallback />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Navigate to="/movies" />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
