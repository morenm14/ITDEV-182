import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const EditableTimer = props => {
  const {id, title, project, elapsed, isRunning, onFormSubmit} = props;
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleEditPress = () => {
    openForm();
  };

  const handleFormClose = () => {
    closeForm();
  };

  const handleSubmit = timer => {
    onFormSubmit(timer);
    closeForm();
  };

  const openForm = () => {
    setEditFormOpen(true);
  };
  const closeForm = () => {
    setEditFormOpen(false);
  };

  return editFormOpen ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      onFormSubmit={handleSubmit}
      onFormClose={handleFormClose}
    />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={handleEditPress}
    />
  );
};

export default EditableTimer;

const styles = StyleSheet.create({});
