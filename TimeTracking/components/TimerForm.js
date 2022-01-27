import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import TimerButton from './TimerButton';

const TimerForm = props => {
  const {id, onFormClose, onFormSubmit} = props;
  const submitText = id ? 'Update' : 'Create';

  const [title, setTitle] = useState(id ? title : '');
  const [project, setProject] = useState(id ? project : '');

  const handleTitleChange = title => {
    setTitle(title);
  };

  const handleProjectChange = project => {
    setProject(project);
  };

  const handleSubmit = () => {
    onFormSubmit({
      id: id,
      title: title,
      project: project,
    });
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleTitleChange}
            value={title}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleProjectChange}
            value={project}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </View>
    </View>
  );
};

export default TimerForm;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {marginVertical: 8},
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {height: 30, padding: 5, fontSize: 12},
  textInputTitle: {fontSize: 14, fontWeight: 'bold', marginBottom: 5},
  buttonGroup: {flexDirection: 'row', justifyContent: 'space-between'},
});
