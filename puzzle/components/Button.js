import {
  Animated,
  ColorPropType,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const getValue = (pressed, disabled) => {
  const base = disabled ? 0.5 : 1;
  const delta = disabled ? 0.1 : 0.3;

  return pressed ? base - delta : base;
};

export default class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    height: PropTypes.number,
    color: ColorPropType,
    fontSize: PropTypes.number,
    borderRadius: PropTypes.number,
  };

  static defaultProps = {
    onPress: () => {},
    disabled: false,
    height: null,
    color: '#0CE1C2',
    fontSize: 24,
    borderRadius: 100,
  };

  constructor(props){
    super(props);
    const {disabled } = props;
    this.state = {pressed: false};
    this.value = new Animated.Value(getValue(false, disabled));
  }

  updateValue(nextProps, nextState){
    if(this.props.disabled !== nextProps.disabled || 
      this.state.pressed !== nextState.pressed){
        Animated.timing(this.value,{
          duration: 200,
          toValue: getValue(nextState.pressed, nextProps.disabled),
          easing:Easing.out(Easing.quad),
        }).start();
      }
  }

  componentWillUpdate(nextProps, nextState){
    this.updateValue(nextProps, nextState);
  }

  componentWillReceiveProps(nextProps, nextState){
    this.updateValue(nextProps, nextState);
  }

  render() {
    const { title, height } = this.props;

    return (
      <TouchableWithoutFeedback>
        <View style={[styles.container, { height }]}>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F1E2A',
    borderWidth: 2,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
});
