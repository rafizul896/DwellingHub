import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Helmet } from "react-helmet";

const SegmentDetails = () => {
    const segments = useLoaderData()
    const { id } = useParams();
    const segment = segments.find(segment => segment.id === parseInt(id))
    console.log(segment)
    const { image, estate_title, description, segment_name, location, area, price, facilities } = segment
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Property Details - DwellingHub</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="fle flex-col lg:flex-row items-center gap-10 md:w-[70%] mx-auto">
                <div className="rounded-2xl h-[200px] md:h-[400px]">
                    <img className="w-full h-full object-cover rounded-lg" src={image} alt="" />
                </div>
                <div className="md:w- py-8 space-y-4">
                    <article className="space-y-4">
                        <div className="space-y-6">
                            <h1 className="text-2xl font-bold md:tracking-tight md:text-4xl">{estate_title}</h1>
                        </div>
                        <div className="border-y py-3 font-medium text-lg flex items-center gap-2">
                            <IoPricetagsOutline />
                            <p>{segment_name}</p>
                        </div>
                    </article>
                    <div>
                        <p><span className="font-bold">Description : </span>{description}</p>
                    </div>
                    <div>
                        <div className="space-y-2">
                            <h3 className="font-bold">Facilities : </h3>
                            <div>
                                {
                                    facilities.map((item, idx) => <li key={idx} className="pl-10 rounded-sm hover:underline">{item}</li>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="text-lg flex flex-col md:flex-row gap-2 md:gap-10">
                        <div className="flex items-center gap-2 border px-4 py-1 rounded-full border-[#6a60e2] font-medium">
                            <div className="text-xl">
                                <IoLocationOutline />
                            </div>
                            <p>{location}</p>
                        </div>
                        <div className="flex items-center gap-2 border px-4 py-1 rounded-full border-[#6a60e2] font-medium">
                            <div className="text-xl">
                                <MdOutlineAddHomeWork />
                            </div>
                            <p>{area}</p>
                        </div>
                        <div className="flex items-center gap-2 border px-4 py-1 rounded-full border-[#6a60e2] font-medium">
                            <div className="text-xl">
                                <AiOutlineDollar />
                            </div>
                            <h2>{price}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5">
                        <button className="btn text-white hover:bg-[#5144e6] bg-[#6a60e2] rounded-full px-7">Send inquiry</button>
                        <button className="btn bg-[#60e260] text-white hover:bg-[#60e260] rounded-full px-7">Booking now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SegmentDetails;