import React from 'react';
import './HarryPotter.scss'
import harrypotter from '../../../videos/Гарри Поттер и философский камень - Русский трейлер (HD).mp4'
const HarryPotter = () => {
    return (
        <div className='player-box'>
            <video className='video' src={harrypotter} controls width='700px' height='500px'></video>
        </div>
    );
}

export default HarryPotter;
