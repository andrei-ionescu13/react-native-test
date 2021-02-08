import React from 'react';
import { View } from 'react-native';
import CanvasDraw from './components/CanvasDraw';
import Todo from './components/Todo';
import _ from 'lodash';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Todo />
    </View>
  );
};

export default App;
