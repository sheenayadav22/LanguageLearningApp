import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { SafeAreaView, StatusBar } from 'react-native';
import MenuIcon from '../components/MenuIcon';
import RNRasa from 'react-native-rasa';
import main from '../styles/main';

const HOST = 'http://52.138.38.250:8000';
function RasaChatScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon/>
    });
  });
  
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={main.safeAreaContainer}>
        <RNRasa
          host={HOST}
          onSendMessFailed={(err) => console.log(err)}
          emptyResponseMessage="Sorry, I don't understand"
          onEmptyResponse={() => console.log("Handle with custom action")}
        />
      </SafeAreaView>
    </>
  );
}

export default RasaChatScreen;
