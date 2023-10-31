import React from 'react';
//Redux
import { useSelector,useDispatch } from 'react-redux';
import { Checkout, Clear } from '../Redux/Cart/CartActions';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Cart from './Cart';
const ShopingCart = () => {
    const state=useSelector(state => state.CartState)
    const dispatch=useDispatch()
    return (
        <div >
               <div className={css`justify-content: center; display: flex; margin-bottom: 18px; font-size: 15px; font-weight: 500;`}>
                {
                    state.checkout  &&  <div className={css`background-color: #8fff8f; padding: 14px; border-radius: 10px;`}>
                    <h1>checked out successfully</h1>
                    </div>
                    }
                    {
                    state.itemsCounter === 0 && !state.checkout && <div className={css`background-color: #f7c789; padding: 14px; border-radius: 10px;`}>
                        <h1>Cleared</h1>
                    </div>
                    }
                </div>
            <div className={css`display:flex; justify-content:center; `}>
            {
                state.selectedItems.length===0
                ?<div className={css`display:grid; justify-content:center;font-size: 20px; font-weight: 600; color: #8b00ff;`}>
                    <h1>Shoping cart is empty</h1>
                <Link className={css`margin:30px auto;`} clas to="/Store"><Button color='secondary' variant='contained'>Go to Store</Button></Link>
                </div>
                :<div className='grid grid-cols-1 w-8/12 flex justify-center py-4 px-5 rounded-lg shadow-lg'>
                    {
                        state.selectedItems.map(item => <Cart item={item} key={item.id} />)
                    }
                </div>
            }
          
        {
            state.selectedItems.length > 0 &&   <div className={css`width:20%; border-radius: 12px; padding: 20px 20px; margin-left: 30px; height: fit-content; box-shadow: 2px 5px 4px 0px #dbdbdb;`}>
                                                        <h1><span className={css`font-weight:600; margin-top:20px; margin-bottom:20px`}>Total: </span>{state.total} $</h1>
                                                       <div className={css`margin-top:30px; margin-bottom:20px; display: flex; justify-content:space-between;`}>
                                                       <Button color='success' variant='contained' onClick={()=> dispatch(Checkout())}>Checkout</Button>
                                                        <Button color='warning' varient='contained' onClick={()=> dispatch(Clear())}>Clear</Button>
                                                       </div>

                                                 </div>
        }
            </div>
   
        </div>
    );
};

export default ShopingCart;