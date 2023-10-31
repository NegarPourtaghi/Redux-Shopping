const AddItem=(product)=>{
    return {type:"ADD_ITEM",
             payload:product}
        }

const RemoveItem=(product)=>{
    return{type:"REMOVE_ITEM",
payload:product}
}

const Increase=(product)=>{
    return{
        type:"INCREASE",
        payload:product}
}

const Decrease=(product)=>{
    return{type:"DECREASE",
payload:product}
}

const Checkout=()=>{
    return{type:"CHECKOUT"}
}

const Clear=()=>{
    return{type:"CLEAR"}
}

export {AddItem, RemoveItem, Increase, Decrease ,Checkout,Clear}