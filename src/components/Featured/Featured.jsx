import React from 'react'
import './Featured.scss'

import featur1 from '../../assets/images/featured1.png';
import featur2 from '../../assets/images/featured2.png';
import featur3 from '../../assets/images/featured3.png';
import story from '../../assets/images/story.png';

import Aos from 'aos';


function Featured() {
  Aos.init()
  return (
    <div className='featur' id='featured'>
      <div className="feature-top">
        <h2>FEATURED</h2>
        <div className="cards">
          <div data-aos='fade-down-right' data-aos-duration="5000">
            <img src={featur1} alt="featur1" />
            <b>JAZZMASTER</b>
            <span>$1050</span>
            <button>ADD TO CART</button>
          </div>
          <div data-aos='fade-up' data-aos-duration="5000">
            <img src={featur2} alt="featur2" />
            <b>INGERSOLL</b>
            <span>$250</span>
            <button>ADD TO CART</button>
          </div>
          <div data-aos='fade-down-left' data-aos-duration="5000">
            <img src={featur3} alt="featur3" />
            <b>ROSE GOLD</b>
            <span>$890</span>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="feature-bottom">
        <div className='left' data-aos="zoom-in">
          <img src={story} alt="story" />
        </div>
        <div className="right" data-aos='fade-down-left' data-aos-duration="5000">
          <h2>OUR STORY</h2>
          <h3>Inspirational Watch of this year</h3>
          <p>The latest and modern watches of this year, is available in various presentations in this store, discover them now.</p>
          <button>DISCOVER</button>
        </div>
      </div>
    </div>
  )
}

export default Featured