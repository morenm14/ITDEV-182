import {StyleSheet, View} from 'react-native';
import React from 'react';
import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

const ToggleableTimerForm = ({isOpen}) => {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" />}
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
