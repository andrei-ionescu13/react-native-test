import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import TextField from './TextField';
import memoizer from '../utils/memoizer';

class AddTodoItem extends Component {
  memoize = memoizer();

  state = {
    inputValue: ''
  };

  handleInputValueChange = this.memoize('handleInputValueChange', (value) => {
    this.setState({
      ...this.state,
      inputValue: value
    })
  })

  handleSubmit = this.memoize('handleSubmit', () => {
    if (this.state.inputValue)
      this.props.addTodoItem(this.state.inputValue)
    this.setState({
      ...this.state,
      inputValue: ''
    })
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextField
            onChangeText={(value) => this.handleInputValueChange(value)}
            value={this.state.inputValue}
          />
        </View>
        <Button onPress={() => this.handleSubmit()}>Add todo</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

export default AddTodoItem;