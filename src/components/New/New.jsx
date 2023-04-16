import React from 'react'
import './New.scss'
import Aos from 'aos'

function New() {
  Aos.init()
  return (
    <div className='new'>
      <div className="new-top">
        <h2>NEW ARRIVALS</h2>
      </div>
      <div className="new-bottom">
        <div className="cards" data-aos='fade-up' data-aos-duration="3000">
          <div>
            <img src="https://abdulloh-rolex.netlify.app/assets/img/new4.png" alt="" />
            <b>JAZZMASTER</b>
            <span>$1050</span>
            <button>ADD TO CART</button>
          </div>
          <div>
            <img src="https://abdulloh-rolex.netlify.app/assets/img/new4.png" alt="" />
            <b>JAZZMASTER</b>
            <span>$1050</span>
            <button>ADD TO CART</button>
          </div>
          <div>
            <img src="https://abdulloh-rolex.netlify.app/assets/img/new4.png" alt="" />
            <b>JAZZMASTER</b>
            <span>$1050</span>
            <button>ADD TO CART</button>
          </div>
          <div>
            <img src="https://abdulloh-rolex.netlify.app/assets/img/new4.png" alt="" />
            <b>JAZZMASTER</b>
            <span>$1050</span>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New