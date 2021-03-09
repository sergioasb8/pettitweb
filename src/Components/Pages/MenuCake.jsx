import React, { useContext } from 'react';
import BgVector from '../Pieces/BgVector';
import CircleLogo from '../Pieces/CircleLogo';
import CategoryCircle from '../Pieces/CategoryCircle';
import SocialMedia from '../Pieces/SocialMedia';
import BackButton from '../Pieces/BackButton';
import ProductContainer from '../Pieces/ProductContainer';
import SizeCategories from '../Pieces/SizeCategories';
import Total from '../Pieces/Total';

import '../StylesCss/Menu.css';
import { Link } from "react-router-dom";
import carContext from '../Context/CarContext';

import Brownie from '../img/icons/brownieIcon.png';
import Cake from '../img/icons/pastelIcon.png';
import CupCake from '../img/icons/cupcakeIcon.png';
import Pie from '../img/icons/pieIcon.png';

function Menu () {
    
    const {newProducts, carItems, onAdd, onRemove, 
            SmallStatus, MediumStatus, BigStatus, status} = useContext(carContext);
    console.log(newProducts);
    console.log(carItems);
    console.log({onAdd});

    return (
        <div className='HomeContainer'>
            <BgVector />
            <div className='Rectangle'>
                <CircleLogo />

                {/* Showing the categories at the screen */}

                <div className='CategoryContainer'>
                    <Link to="/brownie">
                        <div className='LinkCategory'>
                            <CategoryCircle ImgURL={Brownie}/>
                        </div>
                    </Link>
                    <div className='LinkCategory'>
                        <CategoryCircle ImgURL={Cake}/>
                    </div>
                    <Link to="/cupcake">
                        <div className='LinkCategory'>
                            <CategoryCircle ImgURL={CupCake}/>
                        </div>
                    </Link>
                    <Link to="/pie">
                        <div className='LinkCategory'>
                            <CategoryCircle ImgURL={Pie}/>
                        </div>
                    </Link>
                </div>
                
                <SizeCategories small={SmallStatus} medium={MediumStatus} big={BigStatus}/>

                <div className='ListContainer'>
                    {(status === 0) ? 
                        newProducts.map((product) => {
                            return (
                                ( product.category === 'tortasmall') ? 
                                    <div>
                                        <ProductContainer
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                        />
                                    </div> : ''
                            )}) : ''
                    }

                    {(status === 1) ? 
                        newProducts.map((product) => {
                            return (
                                ( product.category === 'TortaMedium') ? 
                                    <div>
                                        <ProductContainer
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                        />
                                    </div> : ''
                            )}) : ''
                    }   

                    {(status === 2) ? 
                        newProducts.map((product) => {
                            return (
                                ( product.category === 'TortaBig') ? 
                                    <div>
                                        <ProductContainer
                                            key={product.id}
                                            product={product}
                                            onAdd = {onAdd}
                                            onRemove = {onRemove}
                                        />
                                    </div> : ''
                            )}) : ''
                    }   
                </div>
                
                <Total carItems = {carItems} />
                <SocialMedia />
                <Link to="/order" className='LinkMenu'>
                    <BackButton Text='Ver orden' />
                </Link>
            </div>
        </div>
    );
}

export default Menu;