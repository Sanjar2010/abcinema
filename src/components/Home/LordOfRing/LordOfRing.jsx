import React from 'react';
import './/LordOfRing.scss'
import lordpfring from '../../../videos/Властелин колец_ Братство кольца (2001) — русский трейлер HD.mp4'
const LordOfRing = () => {
    return (
        <div className='player-box'>
            <video className='video' src={lordpfring} controls width='700px' height='500px'></video>
        </div>
    );
}

export default LordOfRing;
