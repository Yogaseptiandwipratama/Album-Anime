import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from './screen/Beranda';
import Tentang from './screen/Tentang';
import Disukai from './screen/Disukai';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuBawah = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Beranda" component={Beranda} />
      <Tabs.Screen name="Tentang" component={Tentang} />
      <Tabs.Screen name="Disukai" component={Disukai} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={MenuBawah} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
