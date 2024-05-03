import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {}
const Beranda = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
      onPress={() => navigation.navigate ('Beranda')}
      <Text>Beranda</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})