/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';

import {SignUp} from './src/screens';

import Tabs from './navigation/tabs';
import SplashScreen from 'react-native-splash-screen';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:"transparent"
  }
};

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      screenOptions={{
        headerShown:false,
      }}
      initialRouteName={'SignUp'}
      >
        <Stack.Screen name="SignUp" component={SignUp}/>

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
