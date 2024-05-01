/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldKeepLoggedIn, setShouldKeepLoggedIn] = useState(true);

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

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={shouldKeepLoggedIn}
            onValueChange={setShouldKeepLoggedIn}
          />
          <Text>Keep Me Logged In</Text>
        </View>

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
            console.log('password:', password);
            console.log('shouldKeepLoggedIn:', shouldKeepLoggedIn);
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
