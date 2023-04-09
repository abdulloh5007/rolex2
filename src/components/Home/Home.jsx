import React from 'react'
import './Home.scss'
import homeImg from "../../assets/images/home.png" 

function Home() {
  return (
    <div className='home'>
      <div className="home-left">
        <h2>NEW WATCH COLLECTIONS B720</h2>
        <p>Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.</p>
        <span>$1245</span>
        <div className='buttons'>
          <button>Discover</button>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className="home-right">
        <img src={homeImg} alt="homeImg" />
      </div>
    </div>
  )
}

export default Home