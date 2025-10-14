import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
