import React from 'react';
import './style.css';
import BigCard from '../BigCard';

const SectionSeven = () => {
  return (
    <div className='section-seven'>
    <div className='main-section'>
      <h1>Membership Plan</h1>
      <hr className='hori-line2' />
      <p className='para'>Donec imperdiet tincidunt leo vitae mollis. Fusce vitae ullamcorper erat. Curabitur condimentum, tellus ac venenatis finibus, metus purus egestas neque, ac euismod libero turpis ut. </p>
      </div>
      <div className='big-card-container'>
      <BigCard
      plan={"Basic"}
      price={"$12"}
      access={"LIMITED ACCESS"}
      domain={'5'}
      space={'100'}
       />
      <BigCard
      plan={"Standard"}
      price={"$29"}
      access={"LIMITED ACCESS"}
      domain={'10'}
      space={'300'}
      />
      <BigCard
      plan={"Premium"} 
      price={"$55"}
      access={"UNLIMITED ACCESS"}
      domain={'30'}
      space={'500'}
      />
      </div>
    </div>
  )
}

export default SectionSeven
