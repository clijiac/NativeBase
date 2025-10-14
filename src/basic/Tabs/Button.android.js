import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

const Button = props => {
  return (
    <TouchableNativeFeedback
      delayPressIn={0} // eslint-disable-line new-cap
      {...props}
    >
      {props.children}
    </TouchableNativeFeedback>
  );
};

export default Button;
