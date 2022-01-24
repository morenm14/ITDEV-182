import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

const ToggleableTimerForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm />
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
