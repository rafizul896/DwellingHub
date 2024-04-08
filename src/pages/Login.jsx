import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


const Login = () => {
    const { logIn, googleLogin, facebookLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClickShow = () => {
        setShow(!show)
    }
    const onSubmit = (data) => {
        const { email, password } = data;
        logIn(email, password)
            .then(result => {
                toast.success("Login Success", {
                    theme: "colored",
                });
                navigate(location?.state ? location.state : "/")
                console.log(result);
            })
            .catch(error => {
                toast.error("Invalid email or password!", {
                    theme: "colored",
                });
                console.log(error)
            })
    };

    const handleGoogleLogIn = () => {
        googleLogin()
    }

    const handleFacebookLogin = () => {
        facebookLogin()
    }

    return (
        <div className="hero min-h-[90vh] p-0">
            <div className="hero-content md:w-1/2 flex-col bg-base-100 shadow-2xl border md:p-10 px-0 py-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-base-200"
                                {...register("email", { required: true })}
                            />
                            {errors.userName && <span className="text-red-500 p-1">Please enter correct email address</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered bg-base-200"
                                {...register("password", { required: true })}
                            />
                            <div onClick={handleClickShow} className="absolute top-[45%] right-3 cursor-pointer">
                                {
                                    show ? <IoEyeOffOutline /> : <IoEyeOutline />
                                }
                            </div>
                            {errors.userName && <span className="text-red-500 p-1">Please enter correct password</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white hover:btn-info bg-[#403F3F] ">Login</button>
                        </div>
                        <p className="text-sm mt-2 text-center">Don’t Have An Account ? <Link to="/register" className="text-orange-700 font-medium">Register</Link></p>
                    </form>
                    <div className="p-2">
                        <h1 className="font-semibold text-xl text-[#403F3F] text-center">Login Width Social Media</h1>
                        <div className="space-y-3 mt-5">
                            <button onClick={handleGoogleLogIn} className="btn w-full btn-outline">
                                <IoLogoGoogle className="text-lg" />
                                Login with Google
                            </button>
                            <button onClick={handleFacebookLogin} className="btn w-full btn-outline">
                                <FaFacebookF className="text-lg" />
                                Login width Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;