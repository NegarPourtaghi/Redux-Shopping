import React from 'react';
import { css } from '@emotion/css';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
const ProductDetails = (props) => {
    const state=useSelector(state => state.ProductsState.products);
    // const dispatch=useDispatch;
    const {id}=useParams()
    const product=state[id-1]
const {title,image, description, price, category}=product
    return (
        <div>
        <div className={css`display:flex; align-items:center; justify-content:space-between;  padding: 0px 100px;`}>
            <div className={css`  margin: 0px 30px;`}>

                <img src={image} alt="Product" className={css`width:500px`} />

            </div>
            <div>
                <h1 className={css`font-size: 25px; font-weight: 600; color: #5c5b5b;   margin-bottom: 20px;`}>{title}</h1>
                <h1 className={css`color:#5c5b5b`}><span className={css`color:#404040; font-weight:600`}>Price:</span> {price} $</h1>
                <h1 className={css`font-size: 16px; margin-top: 20px; font-weight: 500; color: #5c5b5b;   `}><span className={css`color:#404040; font-weight:600`}>Details:</span> {description}</h1>
                <h1 className={css`font-size: 16px; margin-top: 20px; font-weight: 500; color: #5c5b5b;   `}><span className={css`color:#404040; font-weight:600`}>Category:</span> { category}</h1>
            </div>
           </div>
              <Link to="/Store" className={css`display: flex; justify-content: center; margin-top:40px`}><Button color="secondary" variant='outlined'>Back to Shop</Button></Link>
        </div>
    );
};

export default ProductDetails;