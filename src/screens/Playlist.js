import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../componets/ListItem';
import {bindActionCreators} from 'redux';
import * as PlaylistActions from '../actions/PlaylistActions';

// Screen
class Playlist extends React.Component {
  componentDidMount() {
    const {getPlaylist} = this.props;
    getPlaylist();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.playlist}
          renderItem={({item}) => <ListItem data={item} />}
          keyExtractor={item => item.trackId.toString()}
        />
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = state => {
  console.log('State:');
  console.log(state);

  // Redux Store --> Component
  return {
    playlist: state.playlist.playlist,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPlaylist: PlaylistActions.getPlaylist,
    },
    dispatch,
  );

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
