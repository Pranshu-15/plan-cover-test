import React from 'react';
import './style.css';

const SmallCard = ({ img, imgWidth, heading, content, width, height }) => {
  const cardStyle = {
    width: width || '200px', // Default width is 200px if not provided
    height: height || '200px', // Default height is 200px if not provided
   
  };
  const imgStyle = {
    width: imgWidth || '60%', // Default image width is 60% if not provided
    height: 'auto',
    marginLeft: '30px'
  };

  return (
    <div className='card' 
    style={cardStyle}>
      <img className='img' src={img} style={imgStyle} />  
      <p className='heading'>{heading}</p>
      <p className='content'>{content}</p>
    </div>
  );
}

export default SmallCard;
