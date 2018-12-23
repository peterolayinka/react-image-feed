import React from 'react';
import {Constants} from 'expo' 
import { StyleSheet, Platform, View, Modal } from 'react-native';
import Feed from './screen/Feed';
import Comments from './screen/Comments';
// import CommentInput from './component/CommentInput';


export default class App extends React.Component {
  state = {
    commentsForItem: {},
    showModal: false,
    selectedItemId: null,
  }

  openCommentScreen = id => {
    this.setState({
      showModal: true,
      selectedItemId: id,
    })
  }

  closeCommentScreen = () => {
    this.setState({
      showModal: false,
      selectedItemId: null
    })
  }

  onSubmitComment = (text) => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    }
    this.setState({commentsForItem: updated});
  }

  render() {
    const {commentsForItem, showModal, selectedItemId} = this.state;
    return (
      <View style={styles.container}>
        <Feed style={styles.feed} 
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen} />
        <Modal 
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeCommentScreen} >
          <Comments 
            style={styles.comments}
            comments={commentsForItem[selectedItemId] || []}
            onClose={this.closeCommentScreen}
            onSubmitComment={this.onSubmitComment}
          />
        </Modal>
      </View>
    );
  }
}

const platformVersionIOS = Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;
const platformVersionAndroid = Platform.OS === 'android' ? parseInt(Platform.Version, 7) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  feed: {
    flex: 1,
    marginTop: platformVersionAndroid < 7 || platformVersionIOS < 11 
      ? Constants.statusBarHeight 
      : 0,
  },
  comments: {
    flex: 1,
    marginTop: platformVersionAndroid < 7 || (Platform.OS === 'ios' && platformVersionIOS < 11) 
      ? Constants.statusBarHeight: 0,
  }
});
