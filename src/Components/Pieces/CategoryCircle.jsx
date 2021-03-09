import React from 'react';
import Image from 'react-bootstrap/Image';

function CategoryCircle (props) {
    return (
        <div className='CategoryCircle'>
            <Image 
                onClick={props.PropFunction}
                src={props.ImgURL} 
                alt='IconCategory' 
                className='ImageIcon'/>
        </div>
    )
}

export default CategoryCircle;