import { useContext, useState } from "react";
import { AuthContex } from "../../Provaider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Register = () => {
  const { register } = useContext(AuthContex)
  // console.log(register)
  const navigate = useNavigate()
  const [registerError, setRegisterError] = useState('')
  const [registerSuccess, setRegisterSuccess] = useState('')
  const handelRegister = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const url = e.target.url.value

    setRegisterError('')
    setRegisterSuccess('')

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer')
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Your Password should have at least one upper case characters.')
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Your Password should have at least one LowerCase case characters.')
      return;
    } else if (!/[!@#$%^&*()_+><:"<>:"|{,.}]/.test(password)) {
      setRegisterError('Your Password Should have at least one special characters')
      return;
    }



    register(email, password, name, url)
      .then(res => {
        console.log(res.user)
        e.target.reset()
        toast.success('your register is successfully')
         setRegisterSuccess('your register is successfully')
        navigate("/login")
      })
      .catch(error => {
        // console.error(error);
        setRegisterError(error.massage)
      })

  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">img Url</span>
              </label>
              <input type="text" name="url" placeholder="Imge url" className="input input-bordered" required />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {
            registerError && <p className="text-red-600 text-center text-xl">{registerError}</p>
          }{
            registerSuccess && <p className="text-red-600 text-center text-xl">{registerSuccess}</p>
          }
          <p className="text-center my-4"> Go to<Link to={"/login"} className="underline text-blue-500"> Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;