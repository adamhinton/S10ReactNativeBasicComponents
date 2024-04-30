/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={textValue}
        onChangeText={value => {
          setTextValue(value);
        }}
        autoFocus={true}
        placeholder="Please enter your name"
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
        secureTextEntry={true}
        autoFocus={true}
        placeholder="Password"
        keyboardType="default"
      />
    </SafeAreaView>
  );
};

export default App;
