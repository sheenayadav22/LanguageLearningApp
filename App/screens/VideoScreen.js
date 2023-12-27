import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {Video} from 'expo-av';
import AsyncStorage from '@react-native-community/async-storage';
import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import { render } from 'react-dom';

const _storeData = async (value) => {
  try {
  //we have to wait until AsyncStorage.setItem() returns a promise
  var key = 'videoScreen'
  await AsyncStorage.setItem(key, value);
  console.log('stored video screen')
 
  } catch (error) {
  console.log(error);
  }
  };

function VideoScreen() {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  var lessonTitle = 'UBI EST ROMA?'

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });
  
    return (
      <SafeAreaView style={main.safeAreaContainer}>
        <View style={main.lessonNameArea}>
          <View style={main.lessonTitleBar}>
            <TouchableOpacity onPress={()=>{
                  navigation.navigate("Lesson Introduction")
                  }}>
              <Image 
                source={require('../assets/TriangleLeft.png')}
                resizeMode='contain' />
            </TouchableOpacity>
            <Text style={main.lessonTitleText}>{lessonTitle}</Text>
            <TouchableOpacity onPress={()=>{_storeData('done');
                  navigation.navigate("Select and Listen Activity 1")
                  }}>
              <Image 
                source={require('../assets/TriangleRight.png')}
                resizeMode='contain' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={main.lessonContentArea}>
          <View style={styles.container}>
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: 'https://immersiomediaservice-cact.streaming.media.azure.net/2695e4a6-9525-4b4c-9aff-b0b3c7b39276/squareLectio1.ism/manifest(format=m3u8-cmaf)',
              }}
              useNativeControls
              resizeMode="contain"
              isLooping={false}
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            {/* Commenting out for now - can delete later if truly no longer necessary
            <View style={styles.buttons}>
              <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                  status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
              />
            </View>
            */}
            <Text style={styles.text}>Listen and pay attention to the details</Text>
          </View>
        </View>
        <View style={main.lessonNavButtonArea}> 
          <TouchableOpacity style={main.lessonContinueButton}
                  onPress={()=>{_storeData('done');
                  navigation.navigate("Select and Listen Activity 1")
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    alignContent: 'center'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    justifyContent: "center",
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    marginTop: 20
  }
});

export default VideoScreen;
