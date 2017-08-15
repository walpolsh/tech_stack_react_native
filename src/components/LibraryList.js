import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//this component is ment to show a list of data
class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  };

  renderRow(library) {
    return <ListItem library={library}/>;
  };

  //^first arguement is the item we wish to render.
  //the names of props are completely up to us... library makes sense

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
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
//it connects our app's state to the
