import React, { Component } from "react";
import { Animated, View, StyleSheet, PanResponder } from "react-native";

class Knob extends Component {
  state = {
    rotate: 0,
    width: 100,
    height: 100,
  };

  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt) => {
      var center_x = this.state.offSetX + (this.state.width / 2);
      var center_y = this.state.offSetY + (this.state.height / 2);

      var mouse_x = evt.nativeEvent.pageX;
      var mouse_y = evt.nativeEvent.pageY;

      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);

      var degree = (radians * (180 / Math.PI) * -1) + 90;

      if (degree > this.state.rotate) {
        console.log('right')
        this.props.rightAction();
      }
      else if (degree < this.state.rotate) {
        console.log('left')
        this.props.leftAction();
      }
      this.setState({
        ...this.state,
        rotate: degree
      })
    }
  });

  handleLayoutChange = () => {
    this.feedPost.measure((fx, fy, width, height, px, py) => {
      this.setState({
        ...this.state,
        offSetX: px,
        offSetY: py,
      })
    })
  }

  render() {
    return (
      <View
        onLayout={(event) => { this.handleLayoutChange(event) }}
        ref={view => { this.feedPost = view; }}
        {...this.panResponder.panHandlers} style={{ transform: [{ rotate: `${this.state.rotate}deg` }], height: this.state.height, width: this.state.width, ...styles.knob }} />
    );
  }
}

const styles = StyleSheet.create({
  knob: {
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default Knob;