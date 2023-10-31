
const initialState={
    loading:false,
    products:[],
    error:""
}

const ProductsReducer=(state=initialState , action)=>{
    switch (action.type) {
        case "FETCH_REQUEST":
            return{
                loading:true,
                products:[],
                error:""
            }
        case "FETCH_SUCCESS":
            return{
                loading:false,
                products:action.payload,
                error:""
            }
            case "FETCH_ERROR":
                return{
                    loading:false,
                    products:[],
                    error:action.payload
                }
    
        default:
                return state;
    }

}

export default ProductsReducer;