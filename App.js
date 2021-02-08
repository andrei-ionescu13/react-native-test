import React from 'react';
import { View } from 'react-native';
import CanvasDraw from './components/CanvasDraw';
import _ from 'lodash';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <CanvasDraw />
    </View>
  );
};

export default App;
