import React from 'react';
import './Main.css';
import image1 from './../../../Image/image1.jpg';
import image2 from './../../../Image/image2.jpg';
import image3 from './../../../Image/image3.jpg';
const Main = () => {
    return (
        <div className='row section1'>
        <div className="col-md-6 col-sm-12 image-box">
    <img src={image1} className='image1 img'  alt="" />
    <img src={image2} className='image2 img'  alt=""/>
    <img src={image3} className='image3 img' alt="" />
        </div>
        <div className="col-md-6 col-sm-12 heading-box">
           <div className='pl-4'>
           <h1> Dream is Your <br/>
             Responsibility is Our</h1>
             <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium repudiandae vitae, est at ab veniam voluptas? Nesciunt numquam perspiciatis libero error possimus officiis nobis.</h5>
          <button>More Info</button>
           </div>
        </div>
           
        </div>
    );
};

export default Main;

