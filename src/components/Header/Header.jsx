import React, { useContext, useState } from 'react'
import './Header.scss'
import { Context } from '../Context/Context'

function Header() {
  const [active, setActive] = useState(0)
  const [dark, setDark] = useState('white')
  const { moon, setMoon } = useContext(Context)

  const theme = {
    background: moon === 'white' ? '' : 'hsl(0, 0%, 24%)'
  }

  const [scrol, setScrol] = useState(false)
  const offSet = 4;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  return (
    <div className={scrol === true ? 'header-scroll' : 'header'}>
      <div className="layout">
        <div className="layout-left">
          <a href='##'>
            <i className="bi bi-watch"></i> Rolex
          </a>
          <div className="links">
            <a className={active === 1 ? 'active' : ''} onClick={() => setActive(1)} href="#home">Home</a>
            <a className={active === 2 ? 'active' : ''} onClick={() => setActive(2)} href="#featured">Featured</a>
            <a className={active === 3 ? 'active' : ''} onClick={() => setActive(3)} href="#products">Products</a>
            <a className={active === 4 ? 'active' : ''} onClick={() => setActive(4)} href="#new">New</a>
          </div>
        </div>
        <div className="layout-right">
          <button onClick={() => {
            setDark(dark === 'white' ? 'black' : 'white')
            setMoon(dark === 'white' ? 'black' : 'white')
          }}>
            {dark === 'white' ? <i className="bi bi-brightness-high"></i> : <i className="bi bi-moon"></i>}
          </button>
          <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-bag-dash"></i></button>

          <div style={theme} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">My Cart</h5>
              <button type="button" className="btn-close text-reset my-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header