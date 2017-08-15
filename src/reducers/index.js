import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//one reducer one file

export default combineReducers({
  libraries: LibraryReducer,
});

//when our app first boots up it evaluates this statement
//our state object has a key of 'libraries'
//a value of the list of libraries produced in the reducer
