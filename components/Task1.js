import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task1 = () => {
  const [textFontSize, setTextFontSize] = useState(0);

  const decreaseFontSize = async () => {
    try {
      setTextFontSize(prevTextFontSize => prevTextFontSize - 1);
      await AsyncStorage.setItem('text_font_size', textFontSize.toString())
    } catch (e) {
      // saving error
    }
  }

  const increaseFontSize = async () => {
    try {
      setTextFontSize(prevTextFontSize => prevTextFontSize + 1);
      await AsyncStorage.setItem('text_font_size', textFontSize.toString())
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('text_font_size')
        if (value !== null) {
          console.log(value);
          setTextFontSize(parseInt(value));
        }
      } catch (e) {
        // error reading value
      }
    }

    getData();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: textFontSize }}>Text</Text>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={decreaseFontSize}
          title='Decrease'
        />
        <Button
          onPress={increaseFontSize}
          title='Increase'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsContainer: {
    paddingTop: 8,
    flexDirection: 'row'
  }
})

export default Task1;
