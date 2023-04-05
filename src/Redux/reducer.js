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

} from "./actionsTypes"



const initialState = {
  recipes: [],
  originalRecipes: [],
  noResultsFound: [],
  recipeByID: {},
  diets: [],
}


export default function reducer(state = initialState, { type, payload }) {
  const allRecipes = state.originalRecipes
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
        originalRecipes: payload,
      }
    case GET_DIETS:
      return {
        ...state,
        diets: payload
      }
    case SEARCH_RECIPES:
      return {
        ...state,
        recipes: payload
      }
    case GET_DETAIL:
      return {
        ...state,
        recipeByID: payload
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        recipeByID: payload
      }
    case POST_RECIPE:

      return {
        ...state
      }
    case FILTER_RECIPE_BY_DIETS:
      const recipesFiltered = payload === 'all' ? allRecipes : allRecipes.filter(recipe => recipe.diets?.includes(payload));
      return {
        ...state,
        recipes: recipesFiltered
      }
    case FILTER_RECIPE_BY_ORIGIN:
      const recipesByOrigin = payload === 'Creadas' ? allRecipes.filter(recipe => typeof recipe.id === "string") : allRecipes.filter(recipe => typeof recipe.id === "number");
      if (recipesByOrigin.length) {
        return {
          ...state,
          recipes: payload === 'Todas' ? allRecipes : recipesByOrigin
        }
      } else {
        return {
          ...state,
          noResultsFound: ["NO SE ECONTRARON RECETAS CREADAS :("]
        }
      }
    case SORT_BY_NAME:
      let sortByName;
      if (payload === 'az') {
        sortByName = state.recipes.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
      } if (payload === 'za') {
        sortByName = state.recipes.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      } if (payload === "-") {
        sortByName = state.originalRecipes
      }
      return {
        ...state,
        recipes: sortByName
      }
    case SORT_BY_HS:
      let sortByHs;
      if (payload === 'asc') {
        sortByHs = state.recipes.sort((a, b) => {
          if (a.healthScore > b.healthScore) {
            return 1;
          }
          if (a.healthScore < b.healthScore) {
            return -1;
          }
          return 0;
        });
      } if (payload === 'desc') {
        sortByHs = state.recipes.sort((a, b) => {
          if (a.healthScore > b.healthScore) {
            return -1;
          }
          if (a.healthScore < b.healthScore) {
            return 1;
          }
          return 0;
        });
      } if (payload === "-") {
        sortByHs = state.originalRecipes
      }

      return {
        ...state,
        recipes: sortByHs
      }
    default:
      return { ...state, }
  }
}






