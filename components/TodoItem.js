import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
  }

  handleCheckedChange(value) {
    this.setState({
      ...this.state,
      checked: value,
    })
  }

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