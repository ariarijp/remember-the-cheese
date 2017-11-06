/**
 * @flow
 */

 import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export class List extends Component<{}> {
  _renderItem({item}) {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{item.value}</Text>
        <TouchableOpacity style={styles.delete}
          onPress={() => {
            this.props.deleteItem(item);
          }}>
          <Text style={styles.deleteText}>削除</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <FlatList data={this.props.items}
        extraData={this.props.items.length}
        renderItem={this._renderItem.bind(this)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  delete: {
    margin: 4,
    padding: 10,
    marginLeft: 'auto',
    backgroundColor: '#f00',
  },
  deleteText: {
    color: '#fff',
  },
});
