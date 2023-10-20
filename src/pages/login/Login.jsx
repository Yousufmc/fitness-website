import { useContext, useState } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState('')
  const [registerSuccess, setRegisterSuccess] = useState('')
  const userLocation = location.state || "/";
  const { login } = useContext(AuthContex)
  const handeleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    login(email, password)
      .then(res => {
        toast.success('your register is successfully')
        setRegisterSuccess()
        console.log(res.user)
        e.target.reset()
        navigate(userLocation)
      })
      .catch(err => {
        setRegisterError("your login is invalid")
        console.error(err.message);
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handeleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            registerError && <p className="text-red-600 text-center text-xl">{registerError}</p>
          }{
            registerSuccess && <p className="text-red-600 text-center text-xl">{registerSuccess}</p>
          }
          <p className="text-center my-4"> you are new go to<Link to={"/register"} className="underline text-blue-400"> singUp</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;