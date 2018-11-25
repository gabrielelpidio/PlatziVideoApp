const INITIAL_STATE = {
  isSuggestionLoading: true,
  isCategoryLoading: true,
  isSelectedMovieLoading: true,
}
function videos (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST':
      return {...state, isSuggestionLoading: false, ...action.payload}    
    case 'SET_CATEGORY_LIST':
      return {...state, isCategoryLoading: false, ...action.payload}    
    case 'SET_SELECTED_MOVIE':
      return {...state, isSelectedMovieLoading: false ,selectedMovie: action.payload.movie}
    default:
      return state
  }  
  return state
}



export default videos