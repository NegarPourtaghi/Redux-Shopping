import { css } from '@emotion/css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { IsInCart,QuantityCounts } from './Helpers/Functions';
import { Increase,Decrease,AddItem,RemoveItem } from '../Redux/Cart/CartActions';
import { Button } from '@mui/material';
import trash from '../assets/trash-can-10416(1).svg'
const Cart = ({item}) => {
    const state=useSelector(state => state.CartState);
    const dispatch=useDispatch()
    return (
        <div className='flex justify-between row grid-gap-3 my-4 items-center'>
            <img src={item.image} alt="cartimage" className={css`width:100px`} />
            <h1>{item.title}</h1>
            <span>{item.price}</span>
            <div className={css`width: fit-content;`}>
                  {
                    IsInCart(state , item.id )
                       ? <Button color='secondary'  className={css`font-size: 23px; color: #3c0066; width: 20px !important;   min-width: 20px !important; height: 24px;`} variant='contained'  onClick={()=> dispatch(Increase(item))}>+</Button>
                       : <Button className={css``} color='secondary' variant="contained" onClick={()=> dispatch(AddItem(item))}>Add item</Button>
            
                    }
                    {QuantityCounts(state , item.id) >0 && <span className={css`margin:0px 10px 0px 10px`}>{QuantityCounts(state, item.id)}</span>}
                    {QuantityCounts(state , item.id) ===1 && <Button className={css` width: 34px !important;   min-width: unset !important; `} onClick={()=> dispatch(RemoveItem(item))}><img className={css`  width: 100%;`} src={trash} alt="trashIcon" /></Button>}
                    {QuantityCounts(state , item.id) >1 && <Button color='secondary'  className={css`font-size: 23px; color: #3c0066; width: 20px !important;   min-width: 20px !important; height: 24px;`} variant='contained' onClick={()=> dispatch(Decrease(item))}>-</Button>}
                  </div>
 
        </div>
    );
};

export default Cart;