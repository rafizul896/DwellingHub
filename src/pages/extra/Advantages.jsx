import { FaHeart, FaStar, FaLocationDot } from "react-icons/fa6";
import { MdOutlineSecurity, MdPriceChange } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import {Helmet} from "react-helmet";

const Advantages = () => {
    return (
        <div className="my-10">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Our Advantages - DwellingHub</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="text-[27px] md:text-4xl font-semibold text-center text-[#1f2744]">Giving you the peace of mind</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                <div className="text-center space-y-3 border shadow-xl px-3 py-7 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="text-5xl text-[#6a60e2]">
                            <FaHeart />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2744]">Confortable</h3>
                    <p>
                        Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stones throw away from schools, churches, and hospitals.
                    </p>
                </div>
                <div className="text-center space-y-3 border shadow-xl px-3 py-7 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="text-5xl text-[#6a60e2]">
                            <MdOutlineSecurity />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2744]">Extra Security</h3>
                    <p>
                        You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.
                    </p>
                </div>
                <div className="text-center space-y-3 border shadow-xl px-3 py-7 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="text-5xl text-[#6a60e2]">
                            <FaStar />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2744]">Luxury</h3>
                    <p>
                        Find out how we provide the highest standard of professional property management to give you all the benefits of property.
                    </p>
                </div>
                <div className="text-center space-y-3 border shadow-xl px-3 py-7 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="text-5xl text-[#6a60e2]">
                            <MdPriceChange />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2744]">Best price</h3>
                    <p>
                        Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.
                    </p>
                </div>
                <div className="text-center space-y-3 border shadow-xl px-3 py-7 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="text-5xl text-[#6a60e2]">
                            <FaLocationDot />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2744]">Strategic location</h3>
                    <p>
                        located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.
                    </p>
                </div>
                <div className="text-center space-y-3 border shadow-xl px-3 py-7 rounded-2xl">
                    <div className="flex justify-center">
                        <div className="text-5xl text-[#6a60e2]">
                            <AiOutlinePieChart />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1f2744]">Efficient</h3>
                    <p>
                        Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;