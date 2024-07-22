/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, SafeAreaView, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WelcomeScreen from './src/screens/welcome';

function App(): React.JSX.Element {
  const device = Platform.OS === 'ios' ? 'ios' : 'android';
  useEffect(() => {
    if (device === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <SafeAreaView>
      {/* <WelcomeScreen /> */}
      <Text>Hello 111</Text>
    </SafeAreaView>
  );
}

export default App;
