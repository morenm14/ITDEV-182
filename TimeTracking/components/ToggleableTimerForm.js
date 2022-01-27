import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

const ToggleableTimerForm = ({onFormSubmit}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = timer => {
    onFormSubmit(timer);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <TimerButton title="+" color="black" onPress={handleFormOpen} />
      )}
    </View>
  );
};

export default ToggleableTimerForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
