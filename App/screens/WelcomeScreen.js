import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import lessons from '../api/lessons'

import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';

function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon />
    });
  });

  return (
    <View style={main.centered} >
      {/* <Image source={require("../assets/Immersio2x.png")}/> */}
      <Image 
        style={{width: 300, height: 200}}
        source={require('../assets/Immersio2x.png')}
        resizeMode='contain'/>
      <Text>Welcome to Immersio!</Text>
      <Text>An Ancient Language Learning App</Text>
    </View>
  );
}

export default WelcomeScreen;
