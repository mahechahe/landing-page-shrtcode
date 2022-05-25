import React from 'react'
import '../styles/Cards.css'
import ImgBackground from '../guias/images/illustration-working.svg'

export const Card = () => {
  return (
    <section className='section-card--container'>
        <div className='div-card--left'>
            <h1>More than just <br></br> shorter links</h1>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button>Get Started</button>
        </div>
        <div className='div-card--right'>
            <img src={ImgBackground} alt="" />
        </div>
    </section>
  )
}
