import * as actionTypes from '../actions/actionTypes'


const reducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_POSTS:
        // action contains -> action.type = 'FETCH_POSTS'
        //                 -> action.ingredients = [<data for ingredients>]
            console.log(action);
            return {
                ...state,
                // need to save the part of state per action
                ingredients: action.ingredients 
            }
        default:
            return state
    }
}

export default reducer