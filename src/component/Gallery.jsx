import img1 from "../../public/gallery/1.jpg"
import img2 from "../../public/gallery/2.jpg"
import img3 from "../../public/gallery/3.jpg"
import img4 from "../../public/gallery/4.jpg"
import img5 from "../../public/gallery/5.jpg"
import img6 from "../../public/gallery/6.jpg"
import img7 from "../../public/gallery/7.jpg"
import img8 from "../../public/gallery/8.jpg"
import img9 from "../../public/gallery/9.jpg"
import img10 from "../../public/gallery/10.jpg"
import img11 from "../../public/gallery/11.jpg"
import img12 from "../../public/gallery/12.jpg"
import img13 from "../../public/gallery/13.jpg"

const Gallery = () => {
    return (
        <div>
            <h2 className="text-4xl my-10 text-black text-center font-bold">Our Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
                <img className="p-4 shadow-xl" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500" src={img1} alt="" />
                <div className=" flex-row">
                    <img className="p-4 shadow-xl" data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500" src={img2} alt="" />
                    <img className="p-4 shadow-xl" data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500" src={img4} alt="" />
                </div>
                <img className="p-4 shadow-xl" data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500" src={img3} alt="" />
                <img className="p-4 shadow-xl" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2500" src={img5} alt="" />
                <div className="flex-row">
                    <img className="p-4 shadow-xl" data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="2500" src={img7} alt="" />
                    <img className="p-4 shadow-xl" data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="2500" src={img9} alt="" />
                </div>
                <img className="p-4 shadow-xl" data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="2500" src={img6} alt="" />
                <img className="p-4 shadow-xl" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="4500" src={img8} alt="" />
                <div className="flex-row">
                    <img className="p-4 shadow-xl" data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="4500" src={img10} alt="" />
                    <img className="p-4 shadow-xl" data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="4500" src={img13} alt="" />
                </div>
                <div className="flex-row" data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="4500">
                    <img className="p-4 h-80 w-96  shadow-xl" src={img11} alt="" />
                    <img className="p-4 shadow-xl" src={img12} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;