import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';

//store user progress

const _storeData = async (value) => {
  try {
  //we have to wait until AsyncStorage.setItem() returns a promise
  var key = 'lessonIntro'
  await AsyncStorage.setItem(key, value);
  console.log('stored lesson intro')
 
  } catch (error) {
  console.log(error);
  }
  };




function LessonIntroScreen() {
  const navigation = useNavigation();
  //TODO: insert code to retrieve description and image from database
  var lessonIntroDescription = "If you want to learn Latin, you need to learn at least something about the Roman Empire. So, here is a map." + 
    " Notice the names of major provinces, islands, rivers, and cities. We're going to follow the lives of a Roman family and other" + 
    " friends who live here. Let's learn about where the Empire is, and how to ask questions about it."
  var lessonIntroImage = '../assets/map.png'
  
  var lessonTitle = 'UBI EST ROMA?'

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
                _storeData('done'); 
                navigation.navigate("Title Page")
                }}>
            <Image
              source={require('../assets/TriangleLeft.png')}
              resizeMode='contain' />
          </TouchableOpacity>
          <Text style={main.lessonTitleText}>{lessonTitle}</Text>
          <TouchableOpacity onPress={()=>{
                _storeData('done'); 
                navigation.navigate("Lesson Video")
                }}>
            <Image 
              source={require('../assets/TriangleRight.png')}
              resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={main.lessonContentArea} >
        <View style={styles.introductionScreen}>
          <Image 
            style={styles.image}
            source={require(lessonIntroImage)}
            resizeMode='contain'/>
          <Text style={main.lessonIntroText}>{lessonIntroDescription}</Text>
        </View>
      </View>
      <View style={main.lessonNavButtonArea}> 
        <TouchableOpacity style={main.lessonContinueButton}
                onPress={()=>{
                _storeData('done'); 
                navigation.navigate("Lesson Video")
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
  introductionScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  image: {
    width: 300,
    height: 200,
  }
});


export default LessonIntroScreen;