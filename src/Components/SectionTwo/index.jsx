import React from 'react';
import './style.css';
import SmallCard from '../SmallCard';
import user from '../../media/users.png';
import downloads from '../../media/download-to-storage-drive.png';
import reviews from '../../media/feedback.png';
import like from '../../media/like.png';

const SectionTwo = () => {
  return (
    <div className='card-container'>
      <SmallCard 
      img={user}
      heading={'8,756+'}
      content={'Users'}  
      />
      <SmallCard
        img={downloads}
      heading={'5,500+'}
      content={'Downloads'}
      />
      <SmallCard
        img={reviews}
      heading={'3,650+'}
      content={'Downloads'}
      />
      <SmallCard
         img={like}
      heading={'6,508+'}
      content={'Likes'}
      />
    </div>
  )
}

export default SectionTwo;
