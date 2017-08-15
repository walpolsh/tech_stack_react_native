import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from  'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  };

  render () {
    const { titleStyle } = styles;
    const { id, title } = this.props.library; //id + title from libraryList.json

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);

//^mapStateToProps must be the first arguement in connect()
//null is there because we don't have mapStateToProps
//actions are ensuring the actions are pulled in to the correct component
/*
This:
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
will be dispatched properly to the redux store because of connect()
it also takes all of the actions, and passes them to our component as props
*/

//the second binds action creators to this component
