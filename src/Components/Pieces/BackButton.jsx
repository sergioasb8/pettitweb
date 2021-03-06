import React from 'react';
import '../StylesCss/BackButton.css';

function BackButton (props) {
    return (
        <div className='ComebackContainer'>
            <div className='RegresarText'>{props.Text}</div>
            <div className='TriangleContainer'>
                <div className='Triangle'></div>
            </div>
        </div>
    )
}

export default BackButton;