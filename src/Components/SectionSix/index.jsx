import React from 'react';
import './style.css';
import play from '../../media/play-button.png';

const SectionSix = () => {
  return (
    <div className='section-six'>
      <div className="parallax"></div>
      <div className='word-box'>
      <p>Take a quick overview</p>
      <img className='play-icon' src={play} />
      <p>of this App</p>

      </div>
    </div>
  )
}

export default SectionSix;
