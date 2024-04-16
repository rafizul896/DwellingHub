import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Segment from "./Segment";

const Home = () => {
    const segments = useLoaderData()
    // console.log(segments)
    return (
        <div>
            <Banner></Banner>
            <div className="mt-12">
                <div className="text-center space-y-3">
                    <h1 className="text-2xl md:text-4xl font-bold">Best recommandation</h1>
                    <p className="max-w-[70%] mx-auto md:text-lg">
                        Discover our exclusive selection of the finest one-of-a-kind
                        luxury properties architectural masterpieces.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        segments.map(segment => <Segment key={segment.id} segment={segment}></Segment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;