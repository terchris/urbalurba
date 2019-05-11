export const getMembers = ( members) => {
     
      // make async call to database
     return {type: 'GET_MEMBERS', members: members } 
    
  };