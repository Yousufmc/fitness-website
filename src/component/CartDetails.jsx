import { useLoaderData, useParams } from "react-router-dom";


const CartDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const weddingData = data.filter(items => id == items.ID)
    const { image, name, price, detailsDescription } = weddingData[0]
    return (
        <>
           
            <div className="px-10 lg:px-40 mt-6  ">
                <div className="hero relative rounded-md h-[60svh] md:h-[100svh]" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <button className="btn border-none rounded-md mt-4 text-xl bg-cyan-500 text-white " >Package Price $  {price}
                </button>
                <div className="space-y-6 mt-2 mb-8">
                    <h2 className="text-5xl font-bold">{name}</h2>
                    <p className="text-gray-800 text-xl">{detailsDescription}</p>
                </div>
            </div>
        </>
    );
};


export default CartDetails;