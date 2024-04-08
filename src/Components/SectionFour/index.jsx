import React from 'react'
import './style.css';
import phoneImg from '../../media/1.jpg'
import tick from '../../media/check.png';

const SectionFour = () => {
    return (
        <div className='section-four'>
            <img className='phoneImg' src={phoneImg} />
            <div className='left-curve'></div>
            <div className='right-curve'></div>
            <div className='content-grid'>
            <div className='content-heading'>
                <h1>How it's Works</h1>
                <hr className='hori-line' />
                <p className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod aliquam orci, sit amet commodo nunc rhoncus volutpat. Donec et.</p>
                </div>
                <div className='points'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                <img className='icon-1 icon-img' src = {tick} />
                                <h1>Download For Free</h1>
                                    <p className='para-common'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod aliquam orci, sit amet commodo nunc rhoncus volutpat. Donec et.</p>
                                </td>
                                <td>
                                <img className='icon-2 icon-img' src = {tick} />
                                <h1>Select Membership</h1>
                                    <p className='para-common'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod aliquam orci, sit amet commodo nunc rhoncus volutpat. Donec et.</p>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                <img className='icon-1 icon-img' src = {tick} />
                                <h1>Login Your Account</h1>
                                    <p className='para-common'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod aliquam orci, sit amet commodo nunc rhoncus volutpat. Donec et.</p>
                                </td>
                                <td>
                                <img className='icon-2 icon-img' src = {tick} />
                                    <h1>Enjoy This App</h1>
                                    <p className='para-common'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod aliquam orci, sit amet commodo nunc rhoncus volutpat. Donec et.</p>
                                    <p></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default SectionFour
