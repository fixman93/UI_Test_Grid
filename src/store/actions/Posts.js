import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'


export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.FETCH_POSTS,
        ingredients: ingredients
    }
}

export const getPost = (postId) => {
    return {
        type: actionTypes.FETCH_POST_DETAIL,
        payload: postId
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



export const fetchPostDetailFaild = () => {
    return {
        type: actionTypes.FETCH_POST_DETAIL_FAILD
    }
}

export const fetchPost = (id) => {
    console.log('id', id)
    return dispatch => {
        axios.get( `http://jsonplaceholder.typicode.com/posts/${id}` )
            .then( response => {
                dispatch(getPost(response.data))
                
                console.log('detail post:', response.data)
                
            } )
            .catch( error => {
                dispatch(fetchPostDetailFaild())
        } );
    }
}