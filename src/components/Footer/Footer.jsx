import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='info div'>
            <h2>Our information</h2>
            <p>Uzbekiston</p>
            <p>Manzil: Andijon tumani CHEM</p>
            <p>Tel: <a href="tel:">9989</a></p>
        </div>
        <div className='social div'>
            <h2>Social</h2>
            <a href="##"><i className="bi bi-facebook"></i> Facebook</a>
            <a href="##"><i className="bi bi-twitter"></i> Twitter</a>
            <a href="##"><i className="bi bi-instagram"></i> Instagram</a>
        </div>
        <div className='message div'>
            <h2>Bizga habar bering</h2>
            <button>Habar berish <i className="bi bi-box-arrow-up-right"></i></button>            
        </div>
    </div>
  )
}

export default Footer