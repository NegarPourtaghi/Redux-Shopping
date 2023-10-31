import React from 'react';
import { css } from '@emotion/css'
import basket from '../assets/shopping-cart-3045.svg'
//Redux
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

//CSS
const color="#8b00ff"
const Navbar = () => {
    const state=useSelector(state => state.CartState.itemsCounter)
    return (
        <div className={css`
        padding: 32px;
        font-size: 24px;
        box-shadow: 0px 4px 12px #dedede;
        margin-bottom:100px;
       
      `}>
            <div className={css`display: flex; justify-content: space-between;`}>
                <Link to="/Store" className={css`font-size: 24px; font-weight: 600; color:${color}`} >Shoping Store</Link>
                <Searchbar/>

                <div className={css`display:flex; align-items:center`}>
                    <Link  to="/ShopingCart"><img src={basket} alt="shoping basket" className={css`color: red; width: 40px;`} /></Link>
                    <h1 className={css`font-size: 18px; color:${color};`}>{state}</h1>

                </div>
            </div>
        </div>
    );
};

export default Navbar;