import React, { useState } from 'react';
import { css } from '@emotion/css';
//Redux
import { useSelector } from 'react-redux';
import SearchedItem from './SearchedItem';
//css
const color="#8b00ff"
const Searchbar = () => {
    const [Input , setInput]=useState("")
    const Data=useSelector(state => state.ProductsState)

    const SearchHandler=(e)=>{
    setInput(e.target.value)

    }

    const SearchResults =Data.products.filter(item => item.title.toLowerCase().includes(Input.toLowerCase()))


    return (
        <div>
            <input className={css`border: 1px solid ${color}; border-radius: 20px; width: 180px; height: 32px; padding: 0px 14px; font-size: 14px; outline-none; &:focus {outline-none; border:none;}`} value={Input} placeholder='search' onChange={SearchHandler} />

        {
            Input.length>1 &&    <div className={css`  box-shadow: 0px 3px 5px 3px #e1e0e0d1; z-index: 1; position: absolute; background-color: white; padding: 20px 30px; border-radius: 12px; left: 35%; margin-top: 4px;`}>
            {
                 Input.length>1 &&
                 SearchResults.map(item => <SearchedItem data={item} setInput={setInput} />)
             }
            </div>
        }
        </div>
    );
};

export default Searchbar;