import React from 'react';
import {Text, SafeAreaView, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Image source={require('./cake.png')} style={{width: 100, height: 100}} />
    </SafeAreaView>
  );
};

export default App;
