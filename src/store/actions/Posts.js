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
                console.log('resoooo:', response.data)
            } )
            .catch( error => {
                dispatch(fetchIngredientsFaild())
        } );
    }
}

export const getPost = (showPost) => {
    return {
        type: actionTypes.FETCH_POST_DETAIL,
        showPost: showPost
    }
}

export const fetchPostDetailFaild = () => {
    return {
        type: actionTypes.FETCH_POST_DETAIL_FAILD
    }
}

export const fetchPost = () => {
    return dispatch => {
        axios.get( 'http://jsonplaceholder.typicode.com/posts/1' )
            .then( response => {
                dispatch(getPost(response.data))
                console.log('detail post:', response.data)
            } )
            .catch( error => {
                dispatch(fetchPostDetailFaild())
        } );
    }
}