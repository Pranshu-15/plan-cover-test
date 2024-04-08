import React from 'react';
import './style.css';
import Button from '../Button';

const BigCard = ({plan , price , access , domain , space}) => {
  return (
    <div className='big-card'>
    <div className = 'big-card-box'>
      <h1>{plan}</h1>
      <p className='card-price'>{price}</p>
      <p>{access}</p>
      <hr className='big-card-hr'/>
      <p>{domain} sub domain</p>
            <hr className='big-card-hr'/>
      <p>{space}GB Disk Space</p>
            <hr className='big-card-hr'/>
      <p>24/7 Tech Support</p>
            <hr className='big-card-hr'/>
      <p>Daily Backups</p>
            <hr className='big-card-hr'/>
      <p>Phone Support</p>
      <hr className='big-card-hr'/>
      <div className='btn-box'>
      <Button text={'Choose Plan'} />
      </div>
      </div>
    </div>
  )
}

export default BigCard;
