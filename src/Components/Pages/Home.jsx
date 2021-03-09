import React from 'react'
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import BackButton from '../Pieces/BackButton';
import UnicornCake from '../img/products/UnicornCute.jpg';
import '../StylesCss/Home.css';
import BgVector from '../Pieces/BgVector';
import CircleLogo from '../Pieces/CircleLogo';
import SocialMedia from '../Pieces/SocialMedia';

function Home () {
    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='Rectangle'>
                <CircleLogo />
                <div className='UnicornContainer'>
                    <Image src={UnicornCake} alt='TortasUnicornio' className='UnicornCake'/>
                </div>
                <SocialMedia />
                <Link to="/Brownie" className='LinkMenu'>
                    <BackButton Text='Explorar' />
                </Link>
            </div>
        </div>
    )
}

export default Home