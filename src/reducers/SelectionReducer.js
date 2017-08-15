export default (state = null, action) => { //if state is undefined default to null
  switch (action.type) { //switch over our action type
    case 'select_library': //select particular action
      return action.payload; //how we respond to ^ selection... with selected libary id
    default:
      return state; //orginal state default
  }
};

//^^^ VERY COMMON REDUCER STRUCTURE
//reducers use state and action as arguements
//this reducers purpose is to determine is a row is selected or not.
