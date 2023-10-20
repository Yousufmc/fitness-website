import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OurService = ({ yoga }) => {
    const { image, name, price,description,ID} = yoga
    return (

        <div >
            <div className="card bg-base-100 shadow-xl" data-aos="zoom-out-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <figure><img className="h-56 w-96 " src={image} alt="Shoes" /></figure>
                <div className=" h-64 card-body ">
                    <h2 className="card-title text-black text-xl">{name}</h2>
                    <p>{description}</p>
                    <div className="flex  justify-around items-center">
                    <Link to={`/cardDetails/${ID}`}><button className="btn mr-5   bg-pink-400">Show Details</button></Link>
                        <p className="text-xl font-medium text-black">Price:{price}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;
OurService.propTypes = {
    yoga : PropTypes.node
}