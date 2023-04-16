import React from 'react'
import './Products.scss'

import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'

import testimonial from '../../assets/images/testimonial.png'
import testimonial1 from '../../assets/images/testimonial1.jpg'
import testimonial2 from '../../assets/images/testimonial2.jpg'
import testimonial3 from '../../assets/images/testimonial3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Products() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className='products'>
      <div className="top">
        <h2>PRODUCTS</h2>
      </div>
      <div className="cards" data-aos='fade-up' data-aos-duration="3000">
        <div>
          <img src={product1} alt="product1" />
          <b>SPIRIT ROSE</b>
          <span>$1500</span>
          <button className='mybtn'><i className="bi bi-bag-dash"></i></button>
        </div>
        <div>
          <img src={product2} alt="product2" />
          <b>KHAKI PILOT</b>
          <span>$1350</span>
          <button className='mybtn'><i className="bi bi-bag-dash"></i></button>
        </div>
        <div>
          <img src={product3} alt="product3" />
          <b>JUBILEE BLACK</b>
          <span>$870</span>
          <button className='mybtn'><i className="bi bi-bag-dash"></i></button>
        </div>
        <div>
          <img src={product4} alt="product4" />
          <b>FOSIL ME3</b>
          <span>$650</span>
          <button className='mybtn'><i className="bi bi-bag-dash"></i></button>
        </div>
        <div>
          <img src={product5} alt="product5" />
          <b>DUCHEN</b>
          <span>$950</span>
          <button className='mybtn'><i className="bi bi-bag-dash"></i></button>
        </div>
      </div>
      <div className="comments">
        <div className="slider" data-aos='fade-down-right' data-aos-duration="4000">
          <Swiper
            pagination={pagination}
            navigation={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='slider__comment'>
                <button><i className="bi bi-chat-quote"></i></button>
                <p>They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.</p>
                <b>March 27. 2021</b>
                <div>
                  <img src={testimonial1} alt="testimonial1" />
                  <b>
                    Lee Doe
                    <p>Director of a company</p>
                  </b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slider__comment'>
                <button><i className="bi bi-chat-quote"></i></button>
                <p>They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.</p>
                <b>March 27. 2021</b>
                <div>
                  <img src={testimonial2} alt="testimonial2" />
                  <b>
                    Samatha May
                    <p>Director of a company</p>
                  </b>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slider__comment'>
                <button><i className="bi bi-chat-quote"></i></button>
                <p>They are the best watches that one acquires, also they are always with the latest news and trends, with a very comfortable price and especially with the attention you receive, they are always attentive to your questions.</p>
                <b>March 27. 2021</b>
                <div>
                  <img src={testimonial3} alt="testimonial3" />
                  <b>
                    Raul Zaman
                    <p>Director of a company</p>
                  </b>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right" data-aos="zoom-in">
          <div>
            <img src={testimonial} alt="testimonial" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products