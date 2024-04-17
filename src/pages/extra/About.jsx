import { IoCheckmarkSharp } from "react-icons/io5";

const About = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <div data-aos="fade-right" data-aos-duration="300" className="flex-1 relative mt-20 md:mt-0">
                <img src='https://i.ibb.co/JtKStqV/img16.jpg' alt="" />
                <div className="md:flex gap-3 bg-white absolute -bottom-10 right-1 md:bottom-0 md:right-0 p-2 md:p-5 border">
                    <p className="text-2xl font-semibold">250+<span className="text-sm font-normal">Property Sale</span></p>
                    <p className="text-2xl font-semibold">300+<span className="text-sm font-normal">Appartment Rent</span></p>
                </div>
                <div className="border text-center absolute p-5 bg-white -top-20 left-[20%] md:left-[35%] space-y-1">
                    <div className="flex justify-center">
                        <div className="bg-[#6a60e2] text-white p-1">
                            <IoCheckmarkSharp />
                        </div>
                    </div>
                    <h1>4.9</h1>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>Trusted on</p>
                    <h3 className="text-xl font-semibold">500+ Reviews</h3>
                </div>
            </div>
            <div className="space-y-4 flex-1 mt-5 text-center">
                <h1 data-aos="fade-down" data-aos-duration="500" className="text-center text-2xl md:text-4xl font-semibold">How much is your property worth now?</h1>
                <p data-aos="fade-down" data-aos-duration="500" className="md:text-lg">We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.</p>
                <button data-aos="fade-down" data-aos-duration="500" className="btn">Learn more</button>
            </div>
        </div>
    );
};

export default About;