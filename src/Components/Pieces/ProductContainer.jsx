import React from 'react';
import Image from 'react-bootstrap/Image';
import '../StylesCss/ProductContainer.css';
import '../StylesCss/CategoryPrice.css';

function ProductContainer (props) {

    const { product, onAdd, onRemove } = props;

    let showPrice = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(product.pricesmall));

    return (
        <div className='LinkDescription'>
            <div className='ProductContainer'>
                <div className='ProductNameContainer'>
                    <h3 className='ProductName'>{product.name}</h3>
                </div >
                <div className='ProductImage' >
                    {product.Image}
                </div>                
                
                <div className='ProductPriceContainer' >
                    <div className='ContainerPrice'>
                        <p className='ProductPrice'>{showPrice}</p>
                        <div className='ContainerCounter'>
                            <button className='PlusCounter' onClick={() => onAdd(product)}>+</button>
                            <div className='CircleCounter'>
                                <p className='NumberCounter'>
                                    {product.amount}
                                </p>
                            </div>
                            <button className='MinusCounter' onClick={() => onRemove(product)}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProductContainer;