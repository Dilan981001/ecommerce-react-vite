import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import {FaStart, FaQuoteLeft} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { reviewdata } from '../export';

const Reviews = () => {

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

   useEffect(()=>{
              AOS.init({
                offset:100,
                duration: 500,
                easing:'ease-in-out',
            });
            AOS.refresh();
          
          
          }, []);
    
  
  return (
    <div id='testimonials' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4 '>
    <h1 data-aos="zoom-in" data-aos-delay="100" className='text-purple-600 text-xl font-semibold capitalize'>1100+ Customer Reviews</h1>
    <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize'>Our Customers Love Us</h1>

    <div data-aos="zoom-in" data-aos-delay="300" className='w-full mt-10'>
      <Slider className='w-full' {...settings}>
        {
          reviewdata.map((item, index) => (
            <div key={index}>
              <div className='w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3 bg-white rounded-lg shadow-md'>
                <img src={item.img} alt={item.name} className='w-24 h-24 rounded-full object-cover' />
                <h2 className='text-xl font-semibold capitalize'>{item.name}</h2>
                <p className='text-gray-600 capitalize'>{item.post}</p>
                <p className='text-center text-gray-500 max-w-xl'>{item.para}</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  </div>
);
}

export default Reviews