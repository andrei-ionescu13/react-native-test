import React, { Component, useCallback } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import _ from 'lodash';
class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      borderBottomColor: 'gray'
    }
  }

  get onFocus() {
    return _.memoize(() => {
      this.setState({
        borderBottomColor: '#1976d2'
      })
    })
  }

  get onBlur() {
    return _.memoize(() => {
      this.setState({
        borderBottomColor: 'gray'
      })
    })
  }

  render() {
    return (
      <TextInput
        {...this.props
        }
        onBlur={this.onBlur}
        onFocus={this.onFocus}
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