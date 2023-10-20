import aboutImg from "../assets/images/about/about.png";

function Aboutme() {

  return (
    <>
    <h2 className="text-4xl my-10 text-black text-center font-bold" >About Me</h2>
    <div className=" mx-auto container flex justify-around items-center bg-pink-300">
      <img className="about-image" src={aboutImg} alt="personal photo" data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500" />
        <p className="w-1/2 font-light text-2xl text-center" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500" >
        Yoga is an ancient art that connects the mind and body. It is an exercise that we perform by balancing the elements of our bodies. In addition, it helps us meditate and relax.Moreover, yoga helps us keep control of our bodies as well as mind. It is a great channel for releasing our stress and anxiety. 
        </p>
    </div>
    </>
  );
 
}


export default Aboutme;
