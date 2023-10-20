import { Link, NavLink } from "react-router-dom";
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <div className="footer footer-center p-10 bg-gray-400 text-base-content ">
                <NavLink className="grid grid-flow-col gap-4 text-xl text-black font-bold">
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About Us</Link>
                  <Link to='/register'>Register</Link>
                  <Link to='/logIn'>Login</Link>
                </NavLink>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-4xl text-black ">
                    
                        <BsGoogle></BsGoogle>
                        <BsFacebook></BsFacebook>
                        <BsInstagram></BsInstagram>
                    </div>
                </nav>
                <aside>
                    <p className="text-lg">Copyright © 2023 - All right reserved by Perfect Wedding Planning Ltd</p>
                </aside>
            </div>
        </>
    );
};

export default Footer;