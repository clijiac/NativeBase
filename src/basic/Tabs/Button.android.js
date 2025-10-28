import React from 'react';
import { Pressable } from 'react-native';

const Button = props => {
  const pressableProps = { ...props };
  delete pressableProps.style;
  return <Pressable {...pressableProps}>{props.children}</Pressable>;
};

export default Button;
