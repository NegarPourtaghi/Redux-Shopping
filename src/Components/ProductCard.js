import React from 'react';
import { css } from '@emotion/css';
import { Button } from '@mui/material';
import trash from '../assets/trash-can-10416(1).svg'
//Helpers
import { ShortenTitle , IsInCart, QuantityCounts } from './Helpers/Functions';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { AddItem,RemoveItem,Increase,Decrease } from '../Redux/Cart/CartActions';
import { Link } from 'react-router-dom';
//css
const color="#8b00ff";
const ProductCard = ({product}) => {
    const state=useSelector(state => state.CartState)
    const dispatch=useDispatch()
    return (
        <div className={css`padding: 20px 25px; border: 2px solid ${color}; border-radius: 12px; margin: 10px  10px;`}>

                <div className={css`width: 100%; height: 220px; display:flex; justify-content:center; align-items:center`}>
                <img src={product.image} alt="Product" style={{width:"150px", margin:"0px auto"}} />

                </div>
               <div>
               <h1 className={css`margin-top: 30px; font-weight: 700; color: #4d4d4d;`}>{ShortenTitle(product.title)}</h1>
                <span className={css`color: #4d4d4d; font-weight: 400;`}>{product.price} $</span>
                <div className={css`display:flex; justify-content:space-between; margin:20px 0px`}>
                  <div className={css`width: fit-content;`}>
                  {
                    IsInCart(state , product.id )
                       ? <Button color='secondary'  className={css`font-size: 23px; color: #3c0066; width: 20px !important;   min-width: 20px !important; height: 24px;`} variant='contained'  onClick={()=> dispatch(Increase(product))}>+</Button>
                       : <Button className={css``} color='secondary' variant="contained" onClick={()=> dispatch(AddItem(product))}>Add item</Button>
            
                    }
                    {QuantityCounts(state , product.id) >0 && <span className={css`margin:0px 10px 0px 10px`}>{QuantityCounts(state, product.id)}</span>}
                    {QuantityCounts(state , product.id) ===1 && <Button className={css`min-width: unset !important;`} onClick={()=> dispatch(RemoveItem(product))}><img className={css`  width: 18px;`} src={trash} alt="trashIcon" /></Button>}
                    {QuantityCounts(state , product.id) >1 && <Button color='secondary'  className={css`font-size: 23px; color: #3c0066; width: 20px !important;   min-width: 20px !important; height: 24px;`} variant='contained' onClick={()=> dispatch(Decrease(product))}>-</Button>}
                  </div>
                    <Link className={css`color: ${color}; font-weight: 600;`} to={`/Store/ProductDetails/${product.id}`}>More</Link>
                </div>
               </div>
            
        </div>
    );
};

export default ProductCard;