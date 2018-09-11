import * as actionTypes from '../actions/actionTypes'


const reducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_POSTS:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer