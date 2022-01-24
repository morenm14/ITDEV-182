import React, {useState} from 'react';
import uuidv4 from 'uuid/v4';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

const App = () => {
  const [timers, setTimers] = useState([
    {
      title: 'Mow the lawn',
      project: 'House chores',
      id: uuidv4,
      elapsed: 5456099,
      isRunning: true,
    },
    {
      title: 'Bake squash',
      project: 'Kitchen chores',
      id: uuidv4,
      elapsed: 5456099,
      isRunning: false,
    },
  ]);
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <SafeAreaView>
        <ScrollView
          style={styles.timerList}
          contentInsetAdjustmentBehavior="automatic">
          <ToggleableTimerForm isOpen={false} />
          {timers.map(({title, project, id, elapsed, isRunning}) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 45,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default App;
