export const getMembers = ( members) => {
     
     return {type: 'GET_MEMBERS', members: members } 
    
  };

  export const getFilteredOrgs = ( orgType) => {
     
   return {type: 'GET_FILTERED_ORGS', orgType: orgType } 
  
};