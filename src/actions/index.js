//when exporting many actions just use export const immediately

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};

//this function is an 'action creator', it returns actions
//^all it does is return a plain JS object, so it must be wired up elsewhere.
//^we want to call this action creator from ListItem
//actions are used to tell reducers how to update state in a very specific way
//whenever we call 'selectLibrary' it will send the action to all reducers
//we pass in the id of the library we want to select in the function's arguement
