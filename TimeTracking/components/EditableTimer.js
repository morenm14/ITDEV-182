import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = props => {
  const {id, title, project, elapsed, isRunning, editFormOpen} = props;

  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
};

export default EditableTimer;

const styles = StyleSheet.create({});
