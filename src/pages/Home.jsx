import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Segment from "./Segment";
import About from "./extra/About";
import Testimonial from "./extra/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { Helmet } from "react-helmet";

const Home = () => {
    const segments = useLoaderData()
    // console.log(segments)
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>DwellingHub - Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Banner></Banner>
            <div className="mt-12">
                <div className="text-center space-y-3">
                    <h1 data-aos="fade-down" data-aos-duration="300" className="text-2xl md:text-4xl font-bold text-[#1f2744]">Best recommandation</h1>
                    <p data-aos="fade-down" data-aos-duration="600" className="md:max-w-[70%] mx-auto md:text-lg text-[#5A5A5D]">
                        Discover our exclusive selection of the finest one-of-a-kind
                        luxury properties architectural masterpieces.
                    </p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1500" className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        segments.map(segment => <Segment key={segment.id} segment={segment}></Segment>)
                    }
                </div>
            </div>
            <div className="my-24">
                <About></About>
            </div>
            <div className="my-10">
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;