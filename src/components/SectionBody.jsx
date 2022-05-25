import React, { useState} from 'react'
import '../styles/SectionBody.css'
import imgCard from '../guias/images/icon-brand-recognition.svg'
import imgCard2 from '../guias/images/icon-detailed-records.svg'
import imgCard3 from '../guias/images/icon-fully-customizable.svg'
import useSingleLink from '../hook/useSingleLink'
import { CardLink } from './CardLink'
import HackerNewsLoader from './Loading'
import { Footer } from './Footer'
import { FooterContact } from './FooterContact'
//import Context from '../context/Context'


export const SectionBody = () => {
  //const {getLocalStorage} = useContext(Context)
	const [loading, setLoading] = useState(false);
  const { setUrl, result} = useSingleLink();
  const [error, setError] = useState(false)
  const [link, setLink] = useState('');
  const links = []

  const handleChangeLink = (e) => {
    setLink(e.target.value)
  }
 
  const HandleClickLink = () => {
    if(link === ''){
      setError(true)
    }else{
      setLoading(true)
      setTimeout(() => {
        setError(false)
        setUrl(link)
        setLoading(false)
      }, 2000)
    }
  }

  if(result.ok === true){
    links.push(result.result)
  }


  return (
    <section className='div-section--body'>
        <div className='div-search--api'>
            <input value={link} onChange={handleChangeLink} type='text' placeholder='Shorten a link here..' 
            className={error ? 'error-class' : 'notError'}></input>
            <button className='button-click-api' onClick={HandleClickLink}>Shorten it!</button>
            <button className='button-reset' onClick={() => setLink('')}>X</button>
            {error && <p className='parrafo-error'>Add a link here..</p>}
        </div>
            {loading ? <HackerNewsLoader></HackerNewsLoader> : links.map((link, index) => <CardLink key={index} link={link}></CardLink>)}
        <div className='div-info--body'>
            <h2 >Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className='div-info--footer'>
            <div className='div-card--footer div-card-left'>
              <h2>Brand Recognition</h2>
              <p>Bost your brand recognition with each click. Generec links don't mean a thrig. Branded links help instil confidence in your content</p>
              <div className='card-image'>
                <img src={imgCard} alt="imgCard" />
              </div>
            </div>
            <div className='div-card--footer div-card-center'>
              <h2>Detail Records</h2>
              <p>Bost your brand recognition with each click. Generec links don't mean a thrig. Branded links help instil confidence in your content</p>
              <div className='card-image'>
                <img src={imgCard2} alt="imgCard" />
              </div>
            </div>
            <div className='div-card--footer div-card-right'>
              <h2>Fully Customizable</h2>
              <p>Bost your brand recognition with each click. Generec links don't mean a thrig. Branded links help instil confidence in your content</p>
              <div className='card-image'>
                <img src={imgCard3} alt="imgCard" />
              </div>
            </div>
            <div className='barra-anchor left-barra'></div>
            <div className='barra-anchor right-barra'></div>
        </div>
        <Footer></Footer>
        <FooterContact></FooterContact>
    </section>
  )
}
