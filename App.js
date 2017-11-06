/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
} from 'react-native';
import { AddForm } from './components/AddForm'
import { List } from './components/List'

export default class App extends Component<{}> {
  static STORAGE_KEY = '@RememberTheCheese:items';

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      loaded: false,
    };
  }

  async componentDidMount() {
    const json = await AsyncStorage.getItem(App.STORAGE_KEY);

    if (json !== null) {
      const items = JSON.parse(json);
      this.setState({
        items: items,
        loaded: true,
      })
    }
  }

  _addItem() {
    const items = this.state.items;
    const text = this.state.text;

    if (text.length === 0) {
      return;
    }
    items.push({key: Date.now(), value: text});
    this.setState({
      text: '',
      items: items,
    });
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify(items));
  }

  _onChange(text) {
    this.setState({text: text});
  }

  _deleteItem(item) {
    const items = this.state.items.filter((element, index, array) => {
      return element.key !== item.key;
    });

    this.setState({
      items: items,
    });
    AsyncStorage.setItem(App.STORAGE_KEY, JSON.stringify(items));
  }

  render() {
    return (
      <View style={styles.container}>
        <AddForm value={this.state.text}
          onChangeText={this._onChange.bind(this)}
          onPress={this._addItem.bind(this)}
          disabled={this.state.loaded && this.state.text.length == 0} />
        <List items={this.state.items}
          deleteItem={this._deleteItem.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
