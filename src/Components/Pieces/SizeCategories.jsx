import React from 'react'
import '../StylesCss/SizeCategories.css';

function SizeCategories (props) {

    const { small, medium, big } = props;

    return (
        <div className='CakeCategories'>
            <div className='CakeCategoryTitle' onClick={small}>1/4 libra</div>
            <div className='CakeCategoryTitle' onClick={medium}>1/2 Libra</div>
            <div className='CakeCategoryTitle' onClick={big}>1 Libra</div>
        </div>
    )
}

export default SizeCategories;
