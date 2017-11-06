/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export class AddForm extends Component<{}> {
  render() {
    return (
      <View>
        <TextInput style={styles.input}
          value={this.props.value}
          onChangeText={this.props.onChangeText} />
        <TouchableOpacity style={styles.addButton}
          onPress={this.props.onPress}
          disabled={this.props.disabled}>
          <Text style={styles.addButtonText}>追加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 4,
    padding: 10,
    borderWidth: 1,
  },
  addButton: {
    margin: 4,
    padding: 10,
    backgroundColor: '#99f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
});
