/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column-reverse',
      }}>
      <View
        style={{flex: 1, backgroundColor: 'yellow', width: 200, height: 200}}
      />
      <View
        style={{flex: 2, backgroundColor: 'green', width: 200, height: 200}}
      />
      <View
        style={{flex: 3, backgroundColor: 'black', width: 200, height: 200}}
      />
    </View>
  );
};

export default App;
