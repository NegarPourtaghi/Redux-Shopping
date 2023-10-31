import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchData } from '../Redux/Products/ProductActions';
import ProductCard from './ProductCard';
import spinner from "../assets/Spinner-1s-200px.gif"
import { css } from '@emotion/css';
const ShopingStore = () => {
    const data=useSelector(state => state.ProductsState)
    const dispatch=useDispatch()

    useEffect(()=>{
dispatch(FetchData())
    },[])
    return (
       <div className='flex justify-center'>
            {
                data.loading
                ?<img  className={css`margin:0px auto; width:100px;`} src={spinner} alt="spinner" />
                : data.error
                ?<h1 className={css`display:grid; justify-content:center; font-size: 20px; font-weight: 600; color: #8b00ff;`}>Network Error</h1>
                :<div className='grid grid-cols-4 w-11/12 flex justify-center'>
                    {
                        data.products.map(item => <ProductCard product={item} key={item.id} />)
                    }
                </div>
            }
       </div>
    );
};

export default ShopingStore;