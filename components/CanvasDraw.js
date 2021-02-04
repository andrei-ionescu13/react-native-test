import React, { Component } from 'react';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import { Dimensions, View, Platform } from "react-native";
import { WebView } from 'react-native-webview';

class CanvasDraw extends Component {
  render() {
    let source = { uri: 'file:///android_asset/canvas.html' };
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={source}
          style={{ flex: 1 }}
          onError={(event) =>
            alert(`Webview error: ${event.nativeEvent.description}`)
          }
        />
      </View>
    )
  }
}

export default CanvasDraw;