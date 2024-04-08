import React from 'react';
import './style.css';
import Button from '../Button';
import windows from '../../media/windows.png';
import apple from '../../media/apple.png'
import insta from '../../media/instagram.png'
import fb from '../../media/social.png'
import twitter from '../../media/twitter.png'

const SectionEight = () => {
  return (
    <div className='section-eight'>
     <div className='footer-curve'>
     <div className='section-eight-heading-box'>
      <h1>Subscribe to our Newsletter</h1>
      <hr className='hori-line3' />
      <p className='para'>Donec imperdiet tincidunt leo vitae mollis. Fusce vitae ullamcorper erat. Curabitur condimentum, tellus ac venenatis finibus, metus purus egestas neque, ac euismod libero turpis ut. </p>
      <div className='input-field'>
      <input
      className='section-eight-input'
      type='text'
      placeholder='Enter Your Email here..'
      />
      <Button text={"Subscribe"}/>
      </div>
      </div>
      <div className='section-eight-contact-section'>
        <div className='office'>
            <h1>Our office</h1>
            <p>3rd Floor Estate House 200 North City</p>
        </div>
        <div className='contact-us'>
            <h1>Contact Info</h1>
            <p>Call at 0123-222-999</p>
            <p>Email:email@yourself.com</p>
        </div>
        <div className='download-window'>
            <p>Download App From
            <img className='windows-logo' src={windows} alt='windows-logo'/>
            </p>
        </div>
        <div className='download-apple'>
        <p>Download App From 
            <img className='apple-logo' src={apple} alt='apple-logo'/>
            </p>
        </div>
      </div>
      <div className='section-eight-follow-on'>
        <div className='follow-on'>
            <p>Follow us on:
            <img className='insta' src={insta}  alt='insta-logo'/>
            <img className='fb' src={fb} alt='fb-logo'/>
            <img className='twitter' src={twitter} alt='twitter-logo'/>
            </p>
        </div>
        <div className='section-eight-support-section'>
            <p>Support: 24/7</p>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default SectionEight;
