import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//one reducer one file

export default combineReducers({
  libraries: LibraryReducer,
});
