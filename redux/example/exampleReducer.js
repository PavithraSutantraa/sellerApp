const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POSTID':
      return {
        ...state,
        postToRefresh: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default exampleReducer;
