import React, {useState, useEffect} from 'react';
import uuidv4 from 'uuid/v4';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import {newTimer} from './utils/TimerUtils';

const App = () => {
  const [timers, setTimers] = useState([
    {
      title: 'Mow the lawn',
      project: 'House chores',
      id: uuidv4(),
      elapsed: 5456099,
      isRunning: false,
    },
    {
      title: 'Bake squash',
      project: 'Kitchen chores',
      id: uuidv4(),
      elapsed: 1273998,
      isRunning: true,
    },
    {
      title: 'Make Chicken ',
      project: 'Kitchen chores',
      id: uuidv4(),
      elapsed: 2739088,
      isRunning: false,
    },
  ]);

  useEffect(() => {
    const TIME_INTERVAL = 1000;

    this.intervalId = setInterval(() => {
      setTimers(
        timers.map(timer => {
          const {elapsed, isRunning} = timer;
          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      );
    }, TIME_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [timers]);

  const handleCreateFormSubmit = timer => {
    if (!timer.title || !timer.project) {
      alert('please enter all fields');
      return;
    }
    setTimers([newTimer(timer), ...timers]);
  };

  const handleFormSubmit = attrs => {
    setTimers(
      timers.map(timer => {
        if (timer.id === attrs.id) {
          const {title, project} = attrs;

          return {
            ...timer,
            title: title,
            project: project,
          };
        }
        return timer;
      }),
    );
  };

  const handleRemovePress = timerId => {
    setTimers(timers.filter(t => t.id !== timerId));
  };

  const handleEditPress = event => {
    onEditPress(console.log(event.target.title));
  };

  const toggleTimer = timerId => {
    setTimers(
      timers.map(timer => {
        const {id, isRunning} = timer;
        if (id === timerId) {
          return {
            ...timer,
            isRunning: !isRunning,
          };
        }
        return timer;
      }),
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <SafeAreaView>
        <ScrollView
          style={styles.timerList}
          contentInsetAdjustmentBehavior="automatic">
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
          {timers.map(({title, project, id, elapsed, isRunning}) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
              onEditPress={handleEditPress}
              onFormSubmit={handleFormSubmit}
              onRemovePress={handleRemovePress}
              onStartPress={toggleTimer}
              onStopPress={toggleTimer}
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
