import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from './Button';
import TextField from './TextField';

class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputValueChange(value) {
    this.setState({
      ...this.state,
      inputValue: value
    })
  }

  handleSubmit() {
    if (this.state.inputValue)
      this.props.addTodoItem(this.state.inputValue)
    this.setState({
      ...this.state,
      inputValue: ''
    })
  }

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