import React, { useContext } from 'react';
import '../StylesCss/Order.css';
import Image from 'react-bootstrap/Image'
import Whatsapp from '../img/icons/Whatsapp.svg';
import ProductContainerTwo from '../Pieces/ProductContainerTwo';
import carContext from '../Context/CarContext';
import BgVector from '../Pieces/BgVector';
import CircleLogo from '../Pieces/CircleLogo';
import SocialMedia from '../Pieces/SocialMedia';
import BackButton from '../Pieces/BackButton';
import Total from '../Pieces/Total';
import { Link } from "react-router-dom";

function Order (props) {

    const {onAdd, onRemove, carItems} = useContext(carContext);

    const itemsPrice = carItems.reduce((a, c) => a + c.pricesmall * c.amount, 0);

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(itemsPrice));
    
    let waMsj='';

    //function tha builds the whatsapp url
    const waString=()=>{
        let str = '';
        //for every item in the order creates a string and adds thas string to str
        carItems.forEach(item=>{
            
            let subst=`${item.name}%20(${item.amount})%20precio:$${item.amount*item.pricesmall}%20`;
            str+=subst;            
        }   
        )
        //add the string to whatsapp url
        let waS = `https://wa.me/573215916795?text=${str}`
        //replaces all spaces for %20 that is a space in url
        waS=  waS.replace(/ /g, '%20');
       ;
        //set the url with the total
        waMsj=`${waS}%20Total%20sin%20domicilio:%20$${showTotal}`
        //returns the url 
        return waMsj;   
    }  
          
    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='Rectangle'>
                <CircleLogo />
                <h1 className='OrderTitleText'>Orden</h1>
                <div className='ItemsOrderContainerTwo'>
                    {carItems.map((product) => (
                        <ProductContainerTwo 
                            key={product.id}
                            product={product}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            />
                    ))}
                </div>
                <div className='TotalListContainer'> 
                    <a href={waString()} className='WhatsappContainer'>
                        <Image src={Whatsapp} alt='Whatsapp' className='Whatsapp' />
                        <p className='Enviar'>Enviar</p>
                    </a>
                </div>

                <Total carItems = {carItems} />
                <SocialMedia />
                <Link to="/brownie" className='LinkMenu'>
                    <BackButton Text='Regresar' />
                </Link>
            </div>
        </div>
    )
}

export default Order;