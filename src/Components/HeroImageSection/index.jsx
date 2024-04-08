import React from 'react'
import './style.css';
import BottomCurve from '../BottomCurve';
import UpperCurve from '../UpperCurve';
import mobileImg from '../../media/1712360582605.jpg'
import backgroundImg from '../../media/photo-1620121692029-d088224ddc74.avif'
import Button from '../Button';
const HeroImageSection = () => {
  return (
    <div className='image-curve-container'>
    <UpperCurve/>
    <img className='hero-img' src={backgroundImg} alt='backgroundImage'/>
    <div className='image-text'>
    <h3>Make your day colorful with</h3>
    <h1>This Application</h1>
    <p>Laborum Lorem consequat elit cupidatat minim sint incididunt culpa sit ex id tempor nulla. Non minim labore ad do enim id in velit velit. Ullamco enim mollit incididunt minim ex elit id enim ipsum magna labore.</p>
    <input 
    type='text'
    placeholder='Enter your E-mail here'
    />
    <Button text='Free Trial'/>
    </div>
    <img className='mobileImg' src={mobileImg} alt='mobile'/>
    <BottomCurve/>
</div>
  )
}

export default HeroImageSection;
