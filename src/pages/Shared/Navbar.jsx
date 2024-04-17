import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
        .then(()=>{
            toast.success("Update Success", {
                theme: "colored"
            });
        })
    }
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "btn  bg-[#6a60e2] text-[#FFFFFF]" : "btn bg-[#fff] border-0"}>Home</NavLink></li>
        <li><NavLink to="/updateProfile" className={({ isActive }) => isActive ? "btn bg-[#6a60e2] text-[#FFFFFF]" : "btn bg-[#fff] border-0"}>Update Profile</NavLink></li>
        <li><NavLink to="/ourAdvantages" className={({ isActive }) => isActive ? "btn bg-[#6a60e2] text-[#FFFFFF]" : "btn bg-[#fff] border-0"}>Our Advantages</NavLink></li>
    </>
    return (
        <div className="navbar px-0 bg-base-100">
            <div className="navbar-start flex gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[4] shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                {
                    user ?
                        <a className="text-2xl hidden md:block md:text-3xl font-bold text-[#1f2744]">Dwelling<span className="text-[#6a60e2]">Hub</span></a>
                        :
                        <a className="text-2xl md:text-3xl font-bold text-[#1f2744]">Dwelling<span className="text-[#6a60e2]">Hub</span></a>
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-5 md:gap-10">
                            <div className="avatar flex gap-3 md:gap-5 tooltip hover:tooltip-open tooltip-left" data-tip={user.displayName}>
                                <button className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img className="rounded-full " src={user ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </button>
                                <button onClick={handleLogOut} className="py-2 px-3 md:px-5 bg-[#6a60e2] text-white rounded-md">Logout</button>
                            </div>
                        </div>
                        :
                        <Link to="/login">
                            <button className="py-2 px-3 md:px-5 bg-[#6a60e2] text-white rounded-md">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar