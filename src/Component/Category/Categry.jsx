import React, { useEffect } from 'react'
import product from "../../Assets/about_4_1.png"
import "./Category.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios"
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import './Category.css';
import { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

const Categry = () => {
    const [cate, setcate] = useState([])
    async function viewall() {
        try{
let result=await axios.get("http://localhost:4000/category/viewall")
console.log(result.data.data);




setcate(result.data.data)

        }
        catch(err){

        }
    }
    useEffect(()=>{
        viewall()
    },[])
    
    
    
  return (
    <>
    <div className='swipe'>
    <h1>Top Categories</h1>

        <div className='swipe1'>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={false}

        autoplay={{ // Enable autoplay
          delay: 2500, // Time between slides (in ms)
          disableOnInteraction: false, // Keep autoplay even after user interaction
      }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
       {cate.map(function (data) {
        return( <SwiperSlide>
            <div className='category'>
<div className='ctimg'>
<img src={data.categoryimg} alt="" />
</div>            <h2>{data.categoryname}</h2>
        </div>
            </SwiperSlide>)
       })}
       
      </Swiper>
        </div>
    </div>
    
    </>
  )
}

export default Categry