import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import { min } from 'react-native-reanimated';
import lessons from '../api/lessons';

const _storeData = async (value) => {
  try {
  //we have to wait until AsyncStorage.setItem() returns a promise
  var key = 'grammarScreen'
  await AsyncStorage.setItem(key, value);
  console.log('stored grammar screen')
 
  } catch (error) {
  console.log(error);
  }
  };

function GrammarScreen() {
  const navigation = useNavigation();
  // code to retrieve lesson data from database when database is active on server is found in commented lines
  /*
  const [grammarText, setGrammarText] =  useState({});

  const loadText = async () => {
    await lessons.getGrammarActivityText(setGrammarText);
    return;
  }
  */

  //the following lines can be replaced by the code to retrieve the lesson text from the database
  var description = 'Similar to "is" and "are" in English, "est" is singular and used to talk about one of ' + 
    'something, and "sunt" is plural and used to talk about many things, in this case, different provinces (=provinciae).'
  var highlightedWord = 'provinciae'
  var wordDescription = 'one "provincia" is used with "est" \n two or more "provinciae" is used with "sunt"'
  //end of currently replaceable code

  var lessonTitle = 'UBI EST ROMA?'

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon />
    });
    /*
    const ac = new AbortController ();
    loadText();
    return () => ac.abort();
    */
  });

  return (
    <SafeAreaView style={main.safeAreaContainer}>
      <View style={main.lessonNameArea}>
        <View style={main.lessonTitleBar}>
        <TouchableOpacity onPress={()=>{
                navigation.navigate("Review Exercise")
                }}>
            <Image 
              source={require('../assets/TriangleLeft.png')}
              resizeMode='contain' />
          </TouchableOpacity>
          <Text style={main.lessonTitleText}>{lessonTitle}</Text>
          <TouchableOpacity onPress={()=>{_storeData('done')
                navigation.navigate("Fill in the blanks screen")
                }}>
            <Image 
              source={require('../assets/TriangleRight.png')}
              resizeMode='contain' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={main.lessonContentArea} >
        <View style={styles.GrammarScreen}>
          <Text style={styles.descriptionText}> {description} </Text>
          {/* <Text style={styles.descriptionText}> {grammarText.description} </Text>  */}
          <Text style={styles.brownHighlightedText} > {highlightedWord} </Text>
          {/* <Text style={styles.brownHighlightedText} > {grammarText.highlightedWord} </Text>  */}
          <Text style={main.multilineCenteredText}> {wordDescription} </Text>
          {/* <Text style={main.multilineCenteredText}> {grammarText.wordDescription} </Text>  */}
        </View>
      </View>
      <View style={main.lessonNavButtonArea}> 
        <TouchableOpacity style={main.lessonContinueButton}
                onPress={()=>{_storeData('done')
                navigation.navigate("Fill in the blanks screen")
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
  GrammarScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  descriptionText: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "center",
    color: 'black',
    fontSize: 16
  },
  brownHighlightedText: {
    color: "#FFFFFF",
    backgroundColor: "#ABA194",
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10
  }
});

export default GrammarScreen;