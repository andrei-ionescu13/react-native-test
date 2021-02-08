import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AddTodoItem from './AddTodoItem';
import TodoItem from './TodoItem';
import memoize from '../utils/memoize';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['Buy this', 'Buy that']
    }

    this.addTodoItem = this.addTodoItem.bind(this);
  }

  removeItem = memoize((value) => {
    this.setState({
      ...this.state,
      data: this.state.data.filter(x => x !== value)
    })
  })

  addTodoItem = memoize((value) => {
    this.setState({
      ...this.state,
      data: [...this.state.data, value]
    })
  })

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Todo list</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TodoItem
              key={item}
              removeItem={this.removeItem}
              title={item}
            />
          )}
        />
        <AddTodoItem addTodoItem={this.addTodoItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#1976d2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24
  }
});

export default Todo;