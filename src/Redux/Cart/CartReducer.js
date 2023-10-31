const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}
const SumItems=(item)=>{
    const itemsCounter=item.reduce((total ,product)=> total + product.quantity ,0)
    const total=item.reduce((total, product)=> total+product.price*product.quantity,0).toFixed(2)
    return{itemsCounter ,total}
}
const CartReducer=(state = initialState, action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id))
            state.selectedItems.push({
        ...action.payload,
        quantity:1,

    })
    return{
        ...state,
        selectedItems:[...state.selectedItems],
        ...SumItems(state.selectedItems),
        checkout: false

    }

    case "REMOVE_ITEM":
        const newItems=state.selectedItems.filter(item => item.id !== action.payload.id);
        const index=state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[index].quantity=0;
        return{
            ...state,
            selectedItems:[...newItems],
            ...SumItems(state.selectedItems)

        }
    case "INCREASE":
            const indexI=state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...SumItems(state.selectedItems)

            }
        case "DECREASE":
                const indexD=state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[indexD].quantity--;
                return{
                    ...state,
                    ...SumItems(state.selectedItems)

                }

        case "CLEAR":
                     return{
                        selectedItems:[],
                        itemsCounter:0,
                        total:0,
                        checkout:false
                    }

        case "CHECKOUT":
                      return{
                            selectedItems:[],
                            itemsCounter:0,
                            total:0,
                            checkout:true
                        }


    default:
        return state
    }
} 


export default CartReducer;