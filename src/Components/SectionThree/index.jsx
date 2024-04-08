import React from 'react'
import './style.css'
import SmallCard from '../SmallCard';
import feather from '../../media/feather.png';
import heart from '../../media/heart.png';
import setting from '../../media/settings.png';

const SectionThree = () => {
    return (
        <div className='section-three' >
            <h1>Awesome Apps Features</h1>
            <hr />
            <p className='para'>Id proident enim culpa elit in dolor do magna. Consequat qui adipisicing consequat quis. Sit magna culpa consectetur sit eiusmod officia consectetur laboris est eu.</p>
            <div className='card-section'>
                <SmallCard
                    width={"400px"}
                    height={"350px"}
                    img={feather}
                      imgWidth={"30%"} 
                    heading={"CREATIVE DESIGNE"}
                    content={"Nulla adipisicing officia laborum ipsum voluptate culpa anim anim ut cupidatat irure Lorem."}
                />
                <SmallCard
                    width={"400px"}
                    height={"350px"}
                    img={heart}
                      imgWidth={"30%"} 
                    heading={<span style={{ color: '#001123' }}>LOVEVLY APP</span>}
                    content={"Nulla adipisicing officia laborum ipsum voluptate culpa anim anim ut cupidatat irure Lorem."}
                />
                <SmallCard
                    width={"400px"}
                    height={"350px"}
                    img={setting}
                      imgWidth={"30%"} 
                    heading={"EASY CUSTOMIZE"}
                    content={"Nulla adipisicing officia laborum ipsum voluptate culpa anim anim ut cupidatat irure Lorem."}
                />
            </div>
        </div>
    )
}

export default SectionThree;
