function videos (state = {}, action) {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST':
      return {...state, isSuggestionLoading: false, ...action.payload}    
    case 'SET_CATEGORY_LIST':
      return {...state, isCategoryLoading: false, ...action.payload}    
    case 'SET_SELECTED_MOVIE':
      return {...state, selectedMovie: action.payload.movie}
    default:
      return state
  }  
  return state
}



export default videos