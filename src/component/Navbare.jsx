import { NavLink } from "react-router-dom";
import logo from "../../public/LOgo/logo.png"
import { useContext } from "react";
import { AuthContex } from "../Provaider/AuthProvider";
const Navbare = () => {
  const { user, logout } = useContext(AuthContex)
  const Nave = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/class">Class</NavLink></li>
    <li><NavLink to="/store">Store</NavLink></li>
    <li><NavLink to="/schedule">Schedule</NavLink></li>
  </>
const handelSingOut = () => {
  logout()
      .then(res=>{
          console.log(res.user)
      })
      .catch(err=>{
          console.error(err);
      })
}

console.log(user);
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {Nave}
            </ul>
          </div>
          <img className="h-14 w-14" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Nave}
          </ul>
        </div>


      <div className="navbar-end ">
      {
          user ? <NavLink onClick={handelSingOut}>LogOut</NavLink> : <NavLink to='/login'>LogIn</NavLink>
        }

      </div>
        {/* <div className="navbar-end">
          <NavLink to="/login"><a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> 
               <span className="relative">Login</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a></NavLink>


          <NavLink to="/register"><a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Sing Up</span>
          </a></NavLink>


        </div> */}
      </div>
    </div>
  );
};

export default Navbare;