import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import Product1 from '../assets/Products/product-01.png';
import Product2 from '../assets/Products/product-02.png';
import Product3 from '../assets/Products/product-03.png';
import Product4 from '../assets/Products/product-04.png';
import Product5 from '../assets/Products/product-05.png';
import Product6 from '../assets/Products/product-06.png';
import Product7 from '../assets/Products/product-07.png';
import Product8 from '../assets/Products/product-08.png';


// import required modules
import SwiperCore, {
    Pagination
  } from 'swiper/core';

  SwiperCore.use([Pagination]);

export default function NewArrivals() {
  return (
    <>
    <div>
    <div className="section-title-wrapper">
                    <span className="title-highlighter-product highlighter-secondary"> <i className="fa-solid fa-tags"></i> This week</span>
                    <h2 className="title">New Arrivals</h2>
                </div>
                </div>
      <Swiper
        slidesPerView={3}
        slidesPerColumn={3}
        spaceBetween={30}
        mousewheel={true}
        
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide><div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card product-card" style={{width:"18rem"}}>
  <img src={Product1} className="card-img-top" style={{height:"255px", width:"255px"}} alt="..."/>
  <div className="card-body">
  <div className="inner mb-1">
        <div className="product-rating">
            <span className="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span>
            <span className="rating-number" style={{color:"#6B728E"}}>(64)</span>
        </div>
    </div>
    <h5 className="card-title" style={{color:"#6B728E"}}>Gaming Console</h5>
    <div className="product-variant mb-2">
        <div>
            <span className="price current-price me-2">$29.99</span>
            <span className="price old-price" style={{color:"#d6d6d6", textDecoration:"line-through"}}>$49.99</span>
        </div>
    </div>
    
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
