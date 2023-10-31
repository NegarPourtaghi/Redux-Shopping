const ShortenTitle=(title)=>{
    const Title=title.split(" ")
    const ShortTitle=`${Title[0]} ${Title[1]}`
    return ShortTitle
}

const IsInCart=(state ,id)=>{
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}
const QuantityCounts=(state , id)=>{
    const index=state.selectedItems.findIndex(item => item.id === id)
    if(index === -1){
return false
    }else{
        return state.selectedItems[index].quantity
    }
}
export {ShortenTitle , IsInCart , QuantityCounts}