import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Product, { loader as sLoader } from "./contents/Pages/Product";
import "./server";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Watches from "./contents/Pages/Watches";
import Glasses from "./contents/Pages/Glasses";
import CartContainer from "./contents/Pages/CartContainer";
import Categories from "./contents/Pages/Categories";
import Finder from "./contents/Pages/Finder";

const Home = lazy(() => import("./contents/Pages/Home"));
const Layout = lazy(() => import("./contents/Layout"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="default width-100-p hei-300-px ali-ite-cnt justify-con-cnt">
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),

      errorElement: <>{"somethomg Went wrong plz reload again"}</>,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/glasses",
          element: <Glasses />,
        },
        {
          path: "/watches",
          element: <Watches />,
        },
        {
          path: "/:id",

          element: <Product />,
          loader: ({ params }) => sLoader(params.id),
        },
        {
          path: "/cart",
          element: <CartContainer />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
      ],
    },

    {
      path: "/search",
      element: <Finder />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
