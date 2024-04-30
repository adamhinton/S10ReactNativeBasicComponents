/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

const App = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={textValue}
        onChangeText={setTextValue}
      />
    </SafeAreaView>
  );
};

export default App;
