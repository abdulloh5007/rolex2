import React, { useState } from 'react'
import './Top.scss'

function Top() {
    const [scrollPosition, setScrollPosition] = useState(0);
    scrollPosition.toString()
    const handleScrollToTop = () => {
        setScrollPosition(0);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [scrol, setScrol] = useState(false)
    const offSet = 2;

    const transformBtn = {
        transform: scrol === true ? 'translateY(-80px)' : 'translateY(80px)',
        opacity: scrol === true ? '1' : '0'
    }

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener('scroll', () => {
        if (getTop() > offSet) {
            setScrol(true)
        } else {
            setScrol(false)
        }
    })

    return (
        <div className='scrollTop'>
            <button style={transformBtn} onClick={handleScrollToTop} className='scrollTop-btn'>
                <i className="bi bi-arrow-up"></i>
            </button>
        </div>
    )
}

export default Top