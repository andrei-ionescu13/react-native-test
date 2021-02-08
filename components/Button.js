import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <TouchableOpacity
        {...rest}
        style={styles.button}
      >
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(25, 118, 210)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4
  },
  text: {
    color: '#fff'
  }
})

export default Button;