import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import { connect } from  'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() { //lifecycle method, called before component is re-rendered
    LayoutAnimation.spring(); //called before update takes place
  }

  //user presses library > action creator > rerun reducers >
  //> mapStateToProps >components rerender > view updates

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, paddingLeft: 20 }}>{library.description}</Text>
        </CardSection>
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

//mapStateToProps allows us to connect our app level state to the component level
//

const mapStateToProps = (state, ownProps) => { //ownProps = this.props
  //when called mapStateToProps will rerun pass a new set of props to our component
  //when an action creator is called our app wii re-render

  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };// pass in a new set of props to our component
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
