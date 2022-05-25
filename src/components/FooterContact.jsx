import React from 'react'
import '../styles/Contact.css'
import LogoFooter from '../guias/images/logo.svg'
import Facebook from '../guias/images/icon-instagram.svg'
import Twiter from '../guias/images/icon-twitter.svg'
import Pinteres from '../guias/images/icon-pinterest.svg'
import Instagram from '../guias/images/icon-instagram.svg'

export const FooterContact = () => {
  return (
    <section className='footer-section--contact'>
        <div className='div-image--logo'><img src={LogoFooter} alt="" /></div>
        <div className='div--footer--contact'>
            <div>
                <h3>Features</h3>
                <p>Link shortening</p>
                <p>Brankend Links</p>
                <p>Analytics</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About</p>
                <p>Our team</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='div-icons--media'>
            <img src={Facebook} alt="Facebook" />
            <img src={Twiter} alt="Twiter" />
            <img src={Pinteres} alt="Pinteres" />
            <img src={Instagram} alt="Instagram" />
        </div>
    </section>
  )
}
