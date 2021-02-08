import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import canvas from '../assets/canvas';
import Knob from './Knob';
import memoizer from '../utils/memoizer';

class CanvasDraw extends Component {
  memoize = memoizer();

  handleDraw = (message) => {
    this.webview.postMessage(message);
  }

  render() {
    let source = Platform.OS === 'ios'
      ? require('../assets/canvas.html')
      : { uri: 'file:///android_asset/canvas.html' };

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={(ref) => (this.webview = ref)}
          source={source}
          onError={(event) =>
            alert(`Webview error: ${event.nativeEvent.description}`)
          }
          onMessage={(event) => {
            console.log(event.nativeEvent.data)
          }}
          injectedJavaScript={canvas()}
        />
        <View style={styles.buttonsContaier}>
          <Knob
            leftAction={() => this.handleDraw('left')}
            rightAction={() => this.handleDraw('right')}
          />
          <View style={{ flex: 1 }} />
          <Knob
            leftAction={() => this.handleDraw('down')}
            rightAction={() => this.handleDraw('up')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContaier: {
    flexDirection: 'row',
    paddingHorizontal: 24
  }
});

export default CanvasDraw;