const  historyReducer = (state=[],action) =>
{   switch(action.type)
    {
        case 'ADD_TO_HISTORY':
            const inHistory = state.some((product)=> product.id === action.payload.product.id )
            if(!inHistory)
            {
                return [...state, action.payload.product]
            }
            
        default:
            return state
    }


}

export default historyReducer