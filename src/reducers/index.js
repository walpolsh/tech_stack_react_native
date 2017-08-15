import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//here we combine reducers into one export

export default combineReducers({
  libraries: LibraryReducer, //LibraryReducer assigned to specific key
  selectedLibraryId: SelectionReducer, //key defines how our app's state looks
});

//when our app first boots up it evaluates this statement
//our state object has a key of 'libraries'
//a value of the list of libraries produced in the reducer
//selectedLibraryId indicates the selected library.
