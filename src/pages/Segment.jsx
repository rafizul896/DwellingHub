import PropTypes from 'prop-types';
import { IoLocationOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Segment = ({ segment }) => {
    const { id,image, estate_title, description, segment_name, location, area, price,status } = segment
    console.log(segment)
    return (
        <div>
            <div className="border p-4">
                <div className="w-full md:h-[260px] relative">
                    <img className="w-full h-full" src={image} alt="" />
                    <p className='bg-green-500 text-white px-4 absolute top-0 right-0'>{status}</p>
                </div>
                <div className="p-2 space-y-4">
                    <h1 className="text-2xl font-semibold">{estate_title}</h1>
                    <p>{description.slice(0, 100)}</p>
                    <div className="flex justify-between flex-col md:flex-row gap-2">
                        <div className="flex items-center gap-2">
                            <IoPricetagsOutline />
                            <p>{segment_name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoLocationOutline />
                            <p>{location}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <MdOutlineAddHomeWork />
                            <p>{area}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineDollar />
                            <h2>{price}</h2>
                        </div>
                    </div>
                    <Link to={`/segment/${id}`}><button className="btn w-full btn-primary mt-3">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

Segment.propTypes = {
    segment: PropTypes.object
}

export default Segment;