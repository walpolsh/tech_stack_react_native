import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props)
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//key: libraries (arbitary), value: state object with a libraries prop(hard coded)
//^takes the state object and provies it as props to LibraryList
//state.libraries is refering to our list of libraries
//when executed this should allow us to return the application state.

export default connect(mapStateToProps)(LibraryList);

//^weird syntax
//connect() the function is called which calls LibraryList
//why not connect(LibraryList, ..... ?)
//redux isnt scary, or hard its just filled with lots of confusing terms
//in effect connect is providing a link from our LibraryList to our app state
//it connects our app's state to the LibraryList
