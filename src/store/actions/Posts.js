import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'


export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.FETCH_POSTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFaild = () => {
    return {
        type: actionTypes.FETCH_POSTS_FAILD
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get( 'http://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                dispatch(setIngredients(response.data))
            } )
            .catch( error => {
                dispatch(fetchIngredientsFaild())
        } );
    }
}