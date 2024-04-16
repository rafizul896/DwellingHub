const Testimonial = () => {
    return (
        <div className="space-y-3 py-10">
            <h1 className="text-4xl font-semibold text-center">What people are saying about us</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-3 border py-10 px-3">
                    <h1 className="text-xl font-medium">It proved to be exactly the kind of home we wanted.</h1>
                    <p>
                        We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.
                    </p>
                    <div className="flex gap-3">
                        <div className="">
                            <img className="rounded-full" src="https://mulihreal.netlify.app/assets/avatar1-f63c6908.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium">Jaydon Aminoff</h3>
                            <p className="text-xs">UX Designer</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 border py-10 px-3">
                    <h1 className="text-xl font-medium">Nobody knows Portland and the peninsula better than David.</h1>
                    <p>
                        My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland.
                    </p>
                    <div className="flex gap-3">
                        <div className="">
                            <img className="rounded-full" src="https://mulihreal.netlify.app/assets/avatar3-e22c105d.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium">Alfredo Donin</h3>
                            <p className="text-xs">Student</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 border py-10 px-3">
                    <h1 className="text-xl font-medium">He keeps his client’s best interests in sharp focus.</h1>
                    <p>
                        After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then.
                    </p>
                    <div className="flex gap-3">
                        <div className="">
                            <img className="rounded-full" src="https://mulihreal.netlify.app/assets/avatar1-f63c6908.png" alt="" />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium">Rafizul Islam</h3>
                            <p className="text-xs">Programmer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;