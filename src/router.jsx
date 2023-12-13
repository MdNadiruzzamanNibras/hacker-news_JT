import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Details from "./Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/details/:id",
    element: <Details/>,
  },
]);