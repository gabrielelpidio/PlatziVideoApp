function videos (state = {}, action) {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST':
      return {...state,isSuggestionLoading: false, ...action.payload}    
    case 'SET_CATEGORY_LIST':
      return {...state,isCategoryLoading: false, ...action.payload}    
    default:
      return state
  }  
  return state
}



export default videos