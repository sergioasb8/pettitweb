import React, { useContext } from 'react';
import BgVector from '../Pieces/BgVector';
import CircleLogo from '../Pieces/CircleLogo';
import CategoryCircle from '../Pieces/CategoryCircle';
import SocialMedia from '../Pieces/SocialMedia';
import BackButton from '../Pieces/BackButton';
import ProductContainer from '../Pieces/ProductContainer';
import Total from '../Pieces/Total';

import '../StylesCss/Menu.css';
import { Link } from "react-router-dom";
import carContext from '../Context/CarContext';

import Brownie from '../img/icons/brownieIcon.png';
import Cake from '../img/icons/pastelIcon.png';
import CupCake from '../img/icons/cupcakeIcon.png';
import Pie from '../img/icons/pieIcon.png';

function Menu () {
    
    const {newProducts, onAdd, onRemove, carItems} = useContext(carContext);

    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='Rectangle'>
                <CircleLogo />

                <div className='CategoryContainer'>
                    <Link to="/Brownie">
                        <div className='LinkCategory'>
                            <CategoryCircle ImgURL={Brownie}/>
                        </div>
                    </Link>
                    <Link to="/Cake">
                        <div className='LinkCategory'>
                            <CategoryCircle ImgURL={Cake}/>
                        </div>
                    </Link>
                    <Link to="/CupCake">
                        <div className='LinkCategory'>
                            <CategoryCircle ImgURL={CupCake}/>
                        </div>
                    </Link>
                    <div className='LinkCategory'>
                        <CategoryCircle ImgURL={Pie}/>
                    </div>
                </div>

                <div className='ListContainer'>
                    {newProducts.map((product) => {
                        return (
                            ( product.category === 'pie') ? 
                                <div>
                                    <ProductContainer
                                        key={product.id}
                                        product={product}
                                        onAdd = {onAdd}
                                        onRemove = {onRemove}
                                    />
                                </div> : ''
                        )})}
                </div>
                
                <Total carItems = {carItems} />
                <SocialMedia />
                <Link to="/Order" className='LinkMenu'>
                    <BackButton Text='Ver orden' />
                </Link>
            </div>
        </div>
    );
}

export default Menu;