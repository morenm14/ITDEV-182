import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

const Comments = ({style, comments, onClose, onSubmitComment}) => {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="leave a comment" onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
};

export default Comments;

const styles = StyleSheet.create({});
