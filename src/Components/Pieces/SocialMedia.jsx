import React from 'react';
import Image from 'react-bootstrap/Image'
import Facebook from '../img/icons/facebook.svg';
import Instagram from '../img/icons/instagram.svg';

function SocialMedia () {
    return (
        <footer className='IconContainer'>
            <a href='https://www.facebook.com/Pettitbakery' className='Ref'>
                <Image src={Facebook} alt='FacebookIcon' className='Icon'/>
            </a>
            <a href='https://www.instagram.com/pettitbakery/' className='Ref'>
                <Image src={Instagram} alt='InstagramIcon' className='Icon'/>
            </a>
            
        </footer>
    )
}

export default SocialMedia;