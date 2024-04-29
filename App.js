/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, SafeAreaView, Image} from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState({
    uri: 'http://example.com',
  });

  return (
    <SafeAreaView>
      <Image
        source={imageSource}
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
        resizeMode="center"
        onError={() => {
          console.log('error loading image');
          setImageSource(require('./assets/images/cake.png'));
        }}
      />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        }}
        style={{width: 100, height: 100}}
      />
    </SafeAreaView>
  );
};

export default App;
