import React from 'react';
import './Forsaj.scss'
import greenmill from '../../../videos/Форсаж 10 — Официальный дублированный трейлер (2023).mp4'
const Forsaj = () => {
    return (
        <div className='player-box'>
            <video className='video' src={forsaj} controls width='700px' height='500px'></video>
        </div>
    );
}

export default Forsaj;
