import { Outlet } from "react-router-dom";
import Navbare from "./Navbare";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";


const MainLaout = () => {
    return (
        <div>
            <Navbare></Navbare>
            <Outlet></Outlet>
            <div className="relative bottom-0 w-full">
                <Footer></Footer>
                <Toaster/>
            </div>

        </div>
    );
};

export default MainLaout;