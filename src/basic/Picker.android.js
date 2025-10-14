import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

export default class PickerNB extends Component {
  render() {
    return (
      <Picker ref={c => (this._root = c)} {...this.props}>
        {this.props.children}
      </Picker>
    );
  }
}

class PickerItem extends Component {
  render() {
    return <Picker.Item {...this.props} />;
  }
}
PickerNB.Item = PickerItem;

/*
PickerNB.propTypes = {
  ...Picker.propTypes
};
*/

const StyledPickerNB = connectStyle(
  'NativeBase.PickerNB',
  {},
  mapPropsToStyleNames
)(PickerNB);

export { StyledPickerNB as PickerNB };
