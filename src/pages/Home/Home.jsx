import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner";
import Gallery from "../../component/Gallery";
import OurService from "../../component/OurService";
import Aboutme from "../../component/Aboutme";


const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <h2 className="text-5xl text-center font-bold my-8">Our Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.map(aData => <OurService key={aData.ID} yoga={aData}></OurService>)
                    }
                </div>
            </div>
            <Aboutme></Aboutme>
            <Gallery></Gallery>
           

        </div>
    );
};

export default Home;