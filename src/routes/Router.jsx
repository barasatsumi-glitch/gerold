import { createBrowserRouter } from "react-router-dom";
import { RouterLayout } from "../layout/RouterLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
  },
]);
