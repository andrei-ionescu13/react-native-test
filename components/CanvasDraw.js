import React, { Component } from 'react';
import { Button, View, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import canvas from '../assets/canvas';
class CanvasDraw extends Component {
  webview = null;

  render() {
    let source = Platform.OS === 'ios'
      ? require('../assets/canvas.html')
      : { uri: 'file:///android_asset/canvas.html' };

    const handleClick = (message) => {
      this.webview.postMessage(message);
    }

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={(ref) => (this.webview = ref)}
          source={source}
          onError={(event) =>
            alert(`Webview error: ${event.nativeEvent.description}`)
          }
          onMessage={(event) => {
            // alert('history received');
            console.log(event.nativeEvent.data)
          }}
          injectedJavaScript={canvas()}
        />
        <View style={styles.buttonsContaier}>
          <Button title='LEFT' onPress={() => handleClick('left')} />
          <Button title='RIGHT' onPress={() => handleClick('right')} />
          <View style={{ flex: 1 }} />
          <Button title='UP' onPress={() => handleClick('up')} />
          <Button title='DOWN' onPress={() => handleClick('down')} />
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