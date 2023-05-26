import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home/Home/Home/Home";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import ToyCard from "../components/Pages/ToyCard/ToyCard";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../components/Pages/AddToy/AddToy";
import MyToy from "../components/Pages/MyToy/MyToy";
import AllToys from "../components/Pages/AllToys/AllToys";
import Blog from "../components/Pages/Blog/Blog";
import Protect from "./Protect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoutes>
            <ToyCard></ToyCard>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://b7a11-toy-marketplace-server-side-mahfuz091.vercel.app/toys/${params.id}`),
      },
      {
        path: "addToy",
        element: <Protect><AddToy></AddToy></Protect>
      },
      {
        path: "mytoys",
        element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>

      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ],
  },
]);

export default router;
