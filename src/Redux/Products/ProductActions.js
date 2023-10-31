import axios from "axios"

const FetchProductsRequest=()=>{
    return{type:"FETCH_REQUEST"}
}

const FetchProductSuccess=(products)=>{
    return{type:"FETCH_SUCCESS",
payload:products}
}

const FetchProductsError=(error)=>{
    return{
        type:"FETCH_ERROR",
        payload:error
    }

}

export const FetchData=()=>{
    return (dispatch)=>{
        dispatch(FetchProductsRequest());
        axios.get("https://fakestoreapi.com/products")
        .then(res =>{
            const response=res.data;
            dispatch(FetchProductSuccess(response))
        })
        .catch(err =>{
            const Errors=err.message;
            dispatch(FetchProductsError(Errors))
        })

    }
}

