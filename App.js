import React, {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={{borderWidth: 1, borderRadius: 4, padding: 10}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        {/* Button doesn't come with style prop. Could use Pressable instead */}
        {/* <Button title="Submit" color="red" /> */}

        <Pressable
          disabled={email.length === 0 || password.length < 8}
          style={[
            {backgroundColor: 'black'},
            (email.length === 0 || password.length < 8) && {opacity: 0.5},
          ]}
          onPress={() => {
            console.log('clicked');
            console.log('email:', email);
            console.˝ log('password:', password);
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 10}}>
            Submit
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
