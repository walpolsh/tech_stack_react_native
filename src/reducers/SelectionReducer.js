export default (state = null, action) => { //if state is undefined default to null
  switch (action.type) {
    case 'select_library':
      return action.payload; //record selected libary id
    default:
      return state; //orginal state default
  }
};

//reducers use state and action as arguements
//this reducers purpose is to determine is a row is selected or not.
