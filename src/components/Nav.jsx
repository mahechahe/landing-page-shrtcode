import React, { useState } from 'react'
import '../styles/Nav.css'
import Logo from '../guias/images/logo.svg'
import { AiOutlineMenu } from "react-icons/ai";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
      <>
        <nav className='nav-container'>
            <div className='nav-left'>
                <figure>
                    <img src={Logo} alt="Logo" />
                </figure>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className='nav-right'>
                <button className='button-login'>Login</button>
                <button onClick={() => alert('Proximamente un evento aqui.. jeje')} className='button-sign-up'>Sign up</button>
            </div>
                <div className='item-icon'>
                    <AiOutlineMenu onClick={() => setOpenMenu(!openMenu)} className='icon-menu' size={'28px'}></AiOutlineMenu>
                </div>
        </nav>
        {openMenu && <div className='section-nav--mobile'>
                        <div className='div-icon--up'>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Resources</p>
                        </div>
                        <div className='div-icon--down'>
                            <button className='button-login--icon'>Login</button>
                            <button className='button-singup--icon'>Sign up</button>
                        </div>
                     </div>}
      </>
   
  )
}
