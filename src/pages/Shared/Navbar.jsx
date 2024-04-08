import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "btn btn-primary" : "btn"}>Home</NavLink></li>
        <li><NavLink to="/updateProfile" className={({ isActive }) => isActive ? "btn btn-primary" : "btn"}>Update Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <p>userName</p>
                            <div className="avatar">
                                <button onClick={handleLogOut}  className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </button>
                                {/* <button className="py-2 px-5 bg-[#403F3F] text-white rounded-sm">Sign_Out</button> */}
                            </div>
                        </div>
                        :
                        <Link to="/login">
                            <button className="py-2 px-5 bg-[#403F3F] text-white rounded-sm">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar