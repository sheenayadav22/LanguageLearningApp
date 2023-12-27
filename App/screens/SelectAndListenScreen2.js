import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View, Text, Image, Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-community/async-storage';
import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';

const _storeData = async (value) => {
  try {
  //we have to wait until AsyncStorage.setItem() returns a promise
  var key = 'listen2Screen'
  await AsyncStorage.setItem(key, value);
  console.log('stored listen screen 2')
 
  } catch (error) {
  console.log(error);
  }
  };

function SelectAndListenScreen2() {
  const navigation = useNavigation();
  //TODO: insert code to retrieve lesson data from database
  var instructions = 'Select the Latin word and listen'
  var buttonTitle = 'Ecce'
  var wordDescription = 'similar to "look!" or "behold"'
  var lessonIntroImage = '../assets/map.png'
  var buttonAudio = '../assets/ecce.mp3'

  var lessonTitle = 'UBI EST ROMA?'

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require(buttonAudio)
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon />
    });
  });

  return (
    <SafeAreaView style={main.safeAreaContainer}>
      <View style={main.lessonNameArea}>
        <View style={main.lessonTitleBar}>
          <TouchableOpacity onPress={()=>{
                navigation.navigate("Select and Listen Activity 1")
                }}>
            <Image 
              source={require('../assets/TriangleLeft.png')}
              resizeMode='contain' />
          </TouchableOpacity>
          <Text style={main.lessonTitleText}>{lessonTitle}</Text>
          <TouchableOpacity onPress={()=>{ 
                navigation.navigate("Select and Listen Activity 3")
                }}>
            <Image 
              source={require('../assets/TriangleRight.png')}
              resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={main.lessonContentArea} >
        <View style={styles.listenScreen}>
          <Text style={main.lessonIntroText}> {instructions} </Text>
          <Image 
            style={{width: 300, height: 200}}
            source={require(lessonIntroImage)}
            resizeMode='contain'/>
          <TouchableOpacity style={styles.audioButton} onPress={() => {playSound(); _storeData('done');}}> 
            <Text style={styles.audioButtonText}>
                {buttonTitle}
            </Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}> {wordDescription} </Text>
        </View>
      </View>
      <View style={main.lessonNavButtonArea}> 
        <TouchableOpacity style={main.lessonContinueButton}
                onPress={()=>{
                navigation.navigate("Select and Listen Activity 3")
                }}>
            <Text style={main.lessonContinueButtonText}>
                Continue
            </Text>
        </TouchableOpacity> 
      </View> 
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  listenScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  audioButton: {
    marginTop: 20,
    backgroundColor: '#846F55'
  },
  audioButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10
  },
  descriptionText: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    textAlign: 'center',
    color: 'black',
    fontSize: 16
  }
});

export default SelectAndListenScreen2;