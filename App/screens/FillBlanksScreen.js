import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


function FillBlanksScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });

  var list = [{ id: 0, question: 'Ubi est imperium Romanum?', answer: 'In Europa', show: true}, 
  { id: 1, question: 'Ubi est Aegyptus?', answer: 'In Africa', show: false},
  { id: 2, question: 'Ubi est ludaea?', answer: 'In Asia', show: false}];

  var lessonTitle = 'UBI EST ROMA?'

  
  //Keep track of whether all questions have been displayed or not
  const[done, setDone] = useState(false);
  
  
  //keep track of list of questions
  const [questions, updateQuestions] = useState(list);

  //Total number of questions in the list
  var total = questions.length;

  //keep track of number of questions displayed
  const [count, setCount] = useState(1);

  //keep track of text input (user's answers)
  const [userAnswers, updateAnswers] = useState(new Array(total));

  //keep track of right answers

  let checks = new Array(total); for (let i=0; i<total; ++i) checks[i] = false;
  const [rightAnswers, updateRightAnswers] = useState(checks);

  //keep track of icon states
  
  var listOfIcons = new Array(total); for (let i=0; i<total; ++i) listOfIcons[i] = require("../assets/play-24.png");
  const [icons, updateIconsSources] = useState(listOfIcons);

  //disable past questions
  const[disablePrevQs, updatedisablePrevQs] = useState(checks);

  //keep track of number of right answers
  const[totalRightAnswers, updateTotalRightAnswers] = useState(0);

  const _storeData = async (key,value) => {
    try {
    //we have to wait until AsyncStorage.setItem() returns a promise
    //var key = 'fillScreen'
    await AsyncStorage.setItem(key, value);
    
   
    } catch (error) {
    console.log(error);
    }
    };  

const onClickHandler = (i,answer) => {

    let update = questions.slice();
    let updateChecks = rightAnswers.slice();
    let updateIcons = icons.slice(); 
    let updatePrevQs = disablePrevQs.slice();

    updatePrevQs[i] = true;
   
    if(answer == questions[i].answer) {
        updateChecks[i] = true;
        updateIcons[i] = require("../assets/tick22.png");
        updateTotalRightAnswers(totalRightAnswers + 1);

    }
    else {
        updateIcons[i] = require("../assets/cross22.png");

    }
    updateIconsSources(updateIcons);
    updateRightAnswers(updateChecks);
    updatedisablePrevQs(updatePrevQs);

    if(count < total){

        update[i+1].show = true;
        setCount(count + 1);
        updateQuestions(update);

    }
    else{
        Done();
    }
}

const Done = () => {

    setDone(true);

}

const listOfQuestions = () => {

    
    return questions.map(function(tmp, i){

      
        return tmp.show ? <View key={tmp.id}>
                {!disablePrevQs[i] ? <Text style = {{marginTop: 10, marginBottom: 10, color: 'rgba(70,70,70,1)', fontSize: 20, fontWeight: "bold", alignSelf: 'center'}}>{tmp.question}</Text>: null}
                <View style = {styles.userInputContainer}> 
                  <TextInput 
                          
                          placeholder = "Enter Your Answer" 
                          style={styles.userInput}
                          //style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText= {text => {
                                                  let update = userAnswers.slice();
                                                  update[i] = text;
                                                  updateAnswers(update);
                                              }}
                          editable={!disablePrevQs[i]} 
                          selectTextOnFocus={!disablePrevQs[i]}
                          backgroundColor = {disablePrevQs[i] ? 'rgba(245,245,245,1)': 'rgba(255,255,255,1)'}
                          borderColor = {disablePrevQs[i]? 'rgba(245,245,245,1)': 'rgba(175,175,175,1)'}
                          color = {disablePrevQs[i]? 'rgba(152,152,152,1)': 'rgba(52,52,52,1)'}
                        
                      />
                  
                  <TouchableOpacity 
                      style = {{marginLeft: 10}}
                      disabled = {disablePrevQs[i]}                
                      id = {i}
                      onPress={() => {onClickHandler(i,userAnswers[i])}}>
                      <Image source={icons[i]}/>
                  </TouchableOpacity>
                </View>      
                 
            </View> : null;
        
      });
}
const video = React.useRef(null);
const [status, setStatus] = React.useState({});

return (
  <SafeAreaView style={main.safeAreaContainer}>
    <View style={main.lessonNameArea}>
      <View style={main.lessonTitleBar}>
      <TouchableOpacity onPress={()=>{
              navigation.navigate("Grammar Lesson")
              }}>
          <Image 
            source={require('../assets/TriangleLeft.png')}
            resizeMode='contain' />
        </TouchableOpacity>
        <Text style={main.lessonTitleText}>{lessonTitle}</Text>
        <TouchableOpacity onPress={()=>{
              _storeData('done');
              navigation.navigate("Lesson Summary")
              }}>
          <Image 
            source={require('../assets/TriangleRight.png')}
            resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </View>
    <View style={main.lessonContentArea}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={{alignItems: 'center', top: 50}}>
          <Text style ={{fontSize: 20, marginBottom: 40}}>Answer the following questions:</Text>
          {listOfQuestions()}
          {done ? <View style = {{marginTop: 40, fontSize: 30, color: 'green'}}>
                    <Text style = {{fontSize: 40, color: 'rgba(30, 168, 150, 1)',fontWeight: 'bold'}}>{Math.round(totalRightAnswers*100/total)}{'%'}</Text>
                    <Text style = {{fontSize: 16, color: 'rgba(30, 168, 150, 1)',fontWeight: 'bold'}}>Completed</Text>
                  </View> : null }
        </View>
      </KeyboardAvoidingView>
    </View>
    <View style={main.lessonNavButtonArea}> 
      <TouchableOpacity style={main.lessonContinueButton}
              onPress={()=>{
              _storeData('fillScreen','done');
              navigation.navigate("Lesson Summary")
              }}>
          <Text style={main.lessonContinueButtonText}>
              Continue
          </Text>
      </TouchableOpacity> 
    </View> 
  </SafeAreaView>
  );
}


const styles = StyleSheet.create(
  {
    userInputContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
   
    userInput:
    {
      marginBottom: 10,
      marginTop: 10,
      width: 300,
      height: 42,
      borderWidth: 1,
      textAlign:'center',
      borderRadius: 10,
      fontSize: 18,
     
    },
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: 'rgba(224,220,218,1)',

      
    },
    video: {
      
      alignSelf: 'center',
      width: 420,
      height: 300,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
   
  });
export default FillBlanksScreen;
