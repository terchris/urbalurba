const initState = {
    members:[]
  
  }
  
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'GET_MEMBERS':
        
        return {
            ...state,
            members:action.members
        };
      default:
        return state;
    }
  };
export default rootReducer;