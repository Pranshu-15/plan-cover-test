import React from 'react';
import './style.css';
import img1 from '../../media/1712360582605.jpg'
import img2 from '../../media/1.jpg'
import img3 from '../../media/2.jpg'

const SectionFive = () => {
  return (
    <div className='section-five'>
    <div className='heading-box'>
      <h1>App Screenshots</h1>
      <hr className='hori-line2' />
      <p className='para'>Donec imperdiet tincidunt leo vitae mollis. Fusce vitae ullamcorper erat. Curabitur condimentum, tellus ac venenatis finibus, metus purus egestas neque, ac euismod libero turpis ut. </p>
      </div>
      <div className='image-box'>
        <img className='common img1' src= {img3} />
        <img className='common img2' src= {img3} />
        <img className='common img3' src= {img3} />
        <img className='common img4' src= {img3} />
        <img className='common img5' src= {img3} />
      </div>
    </div>
  )
}

export default SectionFive;
