import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Private, Register } from "./pages";

const router = createBrowserRouter([
  {
    element: <Private />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
