import React, {useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import Feed from './screens/Feed';
import Comments from './screens/Comments';

const App = () => {
  const [commentsForItem, setCommentsForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openCommentScreen = id => {
    setShowModal(true);
    setSelectedItemId(id);
  };

  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectedItemId(null);
  };

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}>
        <Comments
          style={styles.container}
          comments={commentsForItem[selectedItemId] || []}
          onClose={closeCommentScreen}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  comments: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
});

export default App;
