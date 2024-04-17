import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <img className="h-[60vh] rounded-2xl relative" src={'https://static.vecteezy.com/system/resources/previews/011/314/467/non_2x/illustrations-frustrated-expression-woman-for-oops-404-error-design-concept-landing-page-vector.jpg'} alt="img" />
            <Link to='/'><button className=" mt-3 btn bg-[#6a60e2] text-white hover:text-black hover:border-2 hover:border-[#59C6D2] hover:bg-white rounded-full px-5">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;