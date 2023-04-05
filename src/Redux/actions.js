import {
    GET_RECIPES,
    GET_DIETS,
    SEARCH_RECIPES,
    GET_DETAIL,
    CLEAN_DETAIL,
    POST_RECIPE,
    FILTER_RECIPE_BY_DIETS,
    FILTER_RECIPE_BY_ORIGIN,
    SORT_BY_NAME,
    SORT_BY_HS,
    RESET
} from "./actionsTypes"
import axios from 'axios'




export const getRecipes = () => {
    return async (dispatch) => {
        let response = await axios.get("https://servidor-food.onrender.com/recipes")
        dispatch({
            type: GET_RECIPES,
            payload: response.data,
        })
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        let response = await axios.get("https://servidor-food.onrender.com/diets")
        dispatch({
            type: GET_DIETS,
            payload: response.data,
        })
    }
}

export const searchRecipes = (name) => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`https://servidor-food.onrender.com/recipes?name=${name}`)
            dispatch({
                type: SEARCH_RECIPES,
                payload: response.data,
            })
        } catch (error) {
            dispatch({
                type: SEARCH_RECIPES,
                payload: error.response.data
            })
        }
    }
}        
            
        

export const filterRecipeByDiets = (payload) => {
    return {
        type: FILTER_RECIPE_BY_DIETS,
        payload
    }
}

export const filterRecipeByOrigin = (payload) => {
    return {
        type: FILTER_RECIPE_BY_ORIGIN,
        payload
    }
}


export const sortByName = (payload) => {
    return {
        type: SORT_BY_NAME,
        payload
    }
}
export const sortByHs = (payload) => {
    return {
        type: SORT_BY_HS,
        payload
    }
}


export const getDetail = (id) => {
    return async (dispatch) => {
        let response = await axios.get(`https://servidor-food.onrender.com/recipes/${id}`)
        dispatch({
            type: GET_DETAIL,
            payload: response.data,
        })
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,
        payload: {}
    }
}

export const postRecipes = (form) => {
    return async (dispatch) => {
        var json = await axios.post("https://servidor-food.onrender.com/recipes", form, {
        });
        dispatch({
            type: POST_RECIPE,
            payload: json.data
        });
    }
}

export const reset = () => {
    return {
        type: RESET,

    }
}
