import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRouter from "./PrivetRouter";
import SegmentDetails from "../pages/SegmentDetails";
import Advantages from "../pages/extra/Advantages";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/categories.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "updateProfile",
                element: <PrivetRouter>
                    <UpdateProfile></UpdateProfile>
                </PrivetRouter>
            },
            {
                path: "/segment/:id",
                element: <PrivetRouter>
                    <SegmentDetails></SegmentDetails>
                </PrivetRouter>,
                loader: () => fetch('/categories.json')
            },
            {
                path: "ourAdvantages",
                element: <PrivetRouter>
                    <Advantages></Advantages>
                </PrivetRouter>
            }
        ]
    },
]);

export default routes;