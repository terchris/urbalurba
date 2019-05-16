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
        case 'GET_FILTERED_ORGS':
        let filterOrg=state.filter(org=>org.categories.organizationType==action.orgType)
        console.loh(filterOrg)
        return {
          //return filterdOrg
        };
      default:
        return state;
    }
  };
export default rootReducer;