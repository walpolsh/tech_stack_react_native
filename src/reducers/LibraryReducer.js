import data from './LibraryList.json'; //must specify Json

export default () => data;

//whenever this reducer runs I will expect my list of libraries
//when the app boots up all reducers are run one at a time
//so, we have to make sure we return some amount of initial state
//in this case, we return a static list of data
