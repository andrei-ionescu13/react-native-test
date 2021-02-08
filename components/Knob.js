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
      const center_x = this.state.offSetX + (this.state.width / 2);
      const center_y = this.state.offSetY + (this.state.height / 2);

      const mouse_x = evt.nativeEvent.pageX;
      const mouse_y = evt.nativeEvent.pageY;

      const radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);

      const degree = (radians * (180 / Math.PI) * -1) + 90;

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
        {...this.panResponder.panHandlers} style={{
          transform: [{ rotate: `${this.state.rotate}deg` }],
          height: this.state.height,
          width: this.state.width,
          ...styles.knob
        }}>
        <View style={styles.dot} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  knob: {
    backgroundColor: '#0A100D',
    borderRadius: 50,
    position: 'relative'
  },
  dot: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 12,
    backgroundColor: '#A22C29',
    left: 40
  }
});

export default Knob;