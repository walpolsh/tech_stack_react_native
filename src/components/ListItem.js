import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from  'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render () {
    const { titleStyle } = styles;
    console.log(this.props); //actions being imported as props

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default connect(null, actions)(ListItem);

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
