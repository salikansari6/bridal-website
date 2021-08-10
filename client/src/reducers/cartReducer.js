const initialState = {
    cart:[],
    totalPrice:0
}


const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_TO_CART':            
            const inCart = state.cart.some(product => product.id === action.payload.product.id)
            if(inCart){
                return {...state , 
                        totalPrice : state.totalPrice + action.payload.product.price ,
                        cart:state.cart.map(product =>{
                        return product.id===action.payload.product.id ? {...product,quantity:product.quantity+1}: product 
                })}
            }
            else{
                return {...state, 
                    totalPrice : state.totalPrice + action.payload.product.price , 
                    cart:[...state.cart , {...action.payload.product,quantity:1}]}
            } 

        case 'DECREASE_FROM_CART':
            if(action.payload.product.quantity === 1){
                return {...state ,
                        totalPrice : state.totalPrice - action.payload.product.price,
                        cart : state.cart.filter((product) => product.id !== action.payload.product.id)}
            }


            return {...state,
                totalPrice : state.totalPrice - action.payload.product.price ,
                cart:state.cart.map(product =>{
                    return product.id===action.payload.product.id ? {...product,quantity:product.quantity-1}: product 
                }) 
            }
            
        case "REMOVE_FROM_CART":
            return {...state, 
                    totalPrice: state.totalPrice - action.payload.product.price*action.payload.product.quantity
                , cart: state.cart.filter((product) => product.id !== action.payload.product.id)}
        default:
            return state
    }
}


export default cartReducer