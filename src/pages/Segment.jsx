import PropTypes from 'prop-types';
import { IoLocationOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Segment = ({ segment }) => {
    const { id, image, estate_title, description, segment_name, location, area, price, status } = segment
    console.log(segment)
    return (
        <div>
            <div className="p-4 shadow-xl h-[600px] rounded-2xl">
                <div className="w-full md:h-[260px] relative">
                    <img className="w-full h-full rounded-xl" src={image} alt="" />
                    <p className='bg-[#60e260] text-white px-4 absolute top-0 right-0 rounded-tr-xl'>{status}</p>
                </div>
                <div className="p-2 space-y-4">
                    <h1 className="text-2xl font-semibold text-[#1f2744]">{estate_title}</h1>
                    <p className='text-[#5A5A5D]'>{description.slice(0, 100)}</p>
                    <div className="flex justify-between flex-col md:flex-row gap-2">
                        <div className="flex items-center gap-1">
                            <div className='text-[#6a60e2] text-xl'>
                                <IoPricetagsOutline />
                            </div>
                            <p className='font-medium'>{segment_name}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className='text-[#6a60e2] text-xl'>
                                <IoLocationOutline />
                            </div>
                            <p className='font-medium'>{location}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                            <div className='text-[#6a60e2] text-xl'>
                                <MdOutlineAddHomeWork />
                            </div>
                            <p className='font-medium'>{area}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className='text-[#6a60e2] text-xl'>
                                <AiOutlineDollar />
                            </div>
                            <h2 className='font-semibold'>{price}</h2>
                        </div>
                    </div>
                    <Link to={`/segment/${id}`}><button className="btn w-full bg-[#6a60e2] text-[#FFFFFF] mt-3">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

Segment.propTypes = {
    segment: PropTypes.object
}

export default Segment;