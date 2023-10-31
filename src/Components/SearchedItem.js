import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShortenTitle } from './Helpers/Functions';
const SearchedItem = ({data,setInput}) => {
    
    return (
        <div className={css`display:flex; justify-content:space-between; margin:10px`}>
            <img src={data.image} style={{width:"50px"}} alt="dfg" />
<div>
<Link className={css`font-size:18px;`} to={`/Store/ProductDetails/${data.id}`} onClick={()=>setInput ("")}>{ShortenTitle(data.title)}</Link>

</div>
        </div>
    );
};

export default SearchedItem;