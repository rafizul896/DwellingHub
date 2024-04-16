import { useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import auth from "../Firebase/firebase.init";
import { updateProfile } from "firebase/auth";
// import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const updateUserProfile = (name, email, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            email: email,
            photoURL: photo,
        })
    }
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    console.log(user)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const { userName, email, photoURL } = data;
        updateUserProfile(userName, email, photoURL)
            .then(() => {
                navigate()
            })
    };

    return (
        <div className="hero min-h-[100vh] p-0">
            <div className="hero-content md:w-1/2 flex-col border mb-10 bg-base-100 shadow-2xl  md:pb-0 px-0 py-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold">Register your account</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered bg-base-200" defaultValue={displayName}
                                {...register("userName")}
                            />
                            {errors.userName && <span className="text-red-500 p-1">Please Enter your name</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" className="input input-bordered bg-base-200" defaultValue={email}
                                {...register("email")}
                            />
                            {errors.email && <span className="text-red-500 p-1">Please Enter your email address</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your photo URL link" className="input input-bordered bg-base-200" defaultValue={photoURL}
                                {...register("photoURL")}
                            />
                            {errors.photoURL && <span className="text-red-500 p-1">Please Enter your photo URL</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white hover:btn-info bg-[#403F3F] ">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;