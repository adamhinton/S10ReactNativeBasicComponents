/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';

const App = () => {
  const [textValue, setTextValue] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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
        keyboardType="numeric"
      />

      <TextInput
        style={{borderWidth: 1, padding: 10, borderRadius: 4}}
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
        returnKeyType="search"
        autoFocus={true}
        placeholder="Email"
        keyboardType="email-address"
      />
    </SafeAreaView>
  );
};

export default App;
