import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import memoize from '../utils/memoizer';

class TodoItem extends Component {
  memoize = memoize();

  state = { checked: false }

  render() {
    return (
      <View style={styles.todoItem}>
        <Text>{this.props.title}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.removeItem(this.props.title)}>Delete</Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default TodoItem;