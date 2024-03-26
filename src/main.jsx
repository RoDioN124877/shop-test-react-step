import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./reset.css"
import { Nav } from "./layouts/Nav";
import { Main } from "./pages/Main";
import { Item } from "./pages/Item";
import { Catalog } from "./pages/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Outlet />
      </>
    ),
    errorElement: (
      <div
        style={{
          color: "red",
          fontSize: 36,
        }}
      >
        ТАКОЙ СТРАНИЦЕ НЕТ!!!!!!!!!😡🤬
      </div>
    ),
    children: [
      { path: "", element: <Main /> },
      {
        path: "item",
        element: <Item />,
      },
      {
        path: "catalog/:type",
        element: <Catalog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
