import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import { TextPropTypes } from 'deprecated-react-native-prop-types';

class Subtitle extends Component {
  render() {
    return <Text ref={c => (this._root = c)} {...this.props} />;
  }
}

Subtitle.propTypes = {
  ...TextPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

const StyledSubtitle = connectStyle(
  'NativeBase.Subtitle',
  {},
  mapPropsToStyleNames
)(Subtitle);
export { StyledSubtitle as Subtitle };
