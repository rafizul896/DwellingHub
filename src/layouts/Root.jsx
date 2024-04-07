import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Roots = () => {
    return (
        <div className="max-w-7xl w-[95%] mx-auto font-poppins">
            <Navbar></Navbar>
            <div className="min-h-[50vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;