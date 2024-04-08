import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Roots = () => {
    return (
        <div className="max-w-7xl w-[95%] mx-auto font-poppins">
            <Navbar></Navbar>
            <div className="min-h-[50vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Roots;