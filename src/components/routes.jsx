import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import ABout, { getUsers } from "./ABout";
import ABout from "./ABout";
import COntact from "./COntact";
import Nav from "./nav";
import ImageRoute from "../Image";
import Images from "../Images.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,

    children: [
      {
        path: "about",
        element: <ABout />,
        // loader: getUsers,
      },
      {
        path: "contact",
        element: <COntact />,
        // loader: getUsers,
      },
      {
        path: "images",
        element: <Images />,
      },

      {
        path: "/images/:id",
        element: <ImageRoute />,
      },
    ],
  },
]);
