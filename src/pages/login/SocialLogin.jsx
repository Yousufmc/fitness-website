import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContex } from '../../Provaider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const SocialLogin = () => {
    const {githubLogin,googleLogin}= useContext(AuthContex)
    const navigate=useNavigate()
    const handelGoogle=(media)=>{
        media()
        .then(()=>{
            toast.success("user login successfully")
            navigate("/")
           
        })
        .catch(err=>{
            console.error(err);
        })
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around mb-10">
                <div><FcGoogle onClick={()=>handelGoogle(googleLogin)} className='text-3xl'></FcGoogle></div>
                <div><BsGithub onClick={()=>handelGoogle(githubLogin)} className='text-3xl'></BsGithub></div>

            </div>


        </>
    );
};

export default SocialLogin;