import React from 'react'
import '../styles/CardLinks.css'

export const CardLink = ({link}) => {
  return (
    <div className='card-link'>
        <div className='div-original--link'>
            <h3>{link.original_link }</h3>
        </div>
        <div className='div-link--short'>
            <a href={link.full_short_link} rel="noreferrer" target="_blank">{link.full_short_link}</a>
            <button>Copied!</button>
        </div>
    </div>
  )
}
