import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      borderBottomColor: 'gray'
    }

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      borderBottomColor: '#1976d2'
    })
  }

  onBlur() {
    this.setState({
      borderBottomColor: 'gray'
    })
  }

  render() {
    return (
      <TextInput
        {...this.props}
        onBlur={() => this.onBlur()}
        onFocus={() => this.onFocus()}
        style={{
          ...styles.textInput,
          borderBottomColor: this.state.borderBottomColor
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    minWidth: 100,
    borderBottomWidth: 1,
    paddingBottom: 0,
    marginBottom: 8
  }
})

export default TextField;