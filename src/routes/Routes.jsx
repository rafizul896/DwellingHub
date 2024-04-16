import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRouter from "./PrivetRouter";
import SegmentDetails from "../pages/SegmentDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('/categories.json')
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
                element: <SegmentDetails></SegmentDetails>,
                loader: () => fetch('/categories.json')
            }
        ]
    },
]);

export default routes;