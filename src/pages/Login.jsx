const Login = () => {
    const handleLogin = (e) => {
        
    }
    return (
        <div className="hero min-h-[90vh] p-0">
                <div className="hero-content md:w-1/2 flex-col bg-base-100 shadow-2xl border md:p-10 px-0 py-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-base-200" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn text-white hover:btn-info bg-[#403F3F] ">Login</button>
                            </div>
                            <p className="text-sm mt-2 text-center">Dont’t Have An Account ? <Link to="/register" className="text-orange-700 font-medium">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;