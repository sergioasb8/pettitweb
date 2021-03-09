import React from 'react';
import Image from 'react-bootstrap/Image'
import VectorBg from '../img/vectorBg.jpg';

function BgVector () {
    return (
        <div className='ImageContainer'>
            <Image src={VectorBg} alt='Vector' className='VectorBg'/>
        </div>
    )
}

export default BgVector;