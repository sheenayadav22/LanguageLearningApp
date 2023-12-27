import React, { useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image, SafeAreaView, ScrollView} from 'react-native';

import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import topic from '../styles/topic';
import { TouchableOpacity } from 'react-native-gesture-handler';

let chosenTopic = "";

function TopicScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon/>
    });
  });

  state = {
    topicNames: [
        { 'number': '01', 'latinTitle': 'Imperium Romanum', 'englishTitle': 'The Roman Empire', 'status': 'Not Started', 'unlocked': true}, 
        { 'number': '02', 'latinTitle': 'Famila', 'englishTitle': 'The Roman Family', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '03', 'latinTitle': 'Educatio', 'englishTitle': 'Child Rearing', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '04', 'latinTitle': 'Manumissio', 'englishTitle': 'The Freeing of Slaves', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '05', 'latinTitle': 'Apud Villam', 'englishTitle': 'At the Estate', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '06', 'latinTitle': 'Viae et Itinera', 'englishTitle': 'Roads and Journeys', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '07', 'latinTitle': 'Donatio', 'englishTitle': 'Giving', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '08', 'latinTitle': 'Tabernae', 'englishTitle': 'Shopping', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '09', 'latinTitle': 'Natura et Fortuna', 'englishTitle': 'Nature and Fortune', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '10', 'latinTitle': 'Dei et Homines', 'englishTitle': 'Gods and People', 'status': 'Not Started', 'unlocked': false}, 
        { 'number': '11', 'latinTitle': 'Curatio', 'englishTitle': 'Healing', 'status': 'Not Started', 'unlocked': false},
        { 'number': '12', 'latinTitle': 'Para Bellum', 'englishTitle': 'Prepare for Battle', 'status': 'Not Started', 'unlocked': false}
    ]
  }

  return (
    <SafeAreaView style={main.safeAreaContainer}>
        <View style={main.titleArea10}>
            <Text style={main.subTitleText}>Select a topic to start learning about</Text>
        </View>
        <View style={main.contentArea75}>
            <ScrollView style={main.scrollView}>
                {
                    this.state.topicNames.map((item, index) =>(
                        <View key = {item.number} style={topic.listItem}>
                            <View style={topic.numberBox}>
                                <Text style={topic.numberText}>{item.number}</Text>
                                <Text style={topic.statusText}>{item.status}</Text>
                            </View>
                            <View style={topic.descriptionBox}>
                                <Text style={topic.latinText}>{item.latinTitle}</Text>
                                <Text style={topic.englishText}>{item.englishTitle}</Text>
                                <TouchableOpacity style={[item.unlocked ? topic.selectButtonUnlocked : topic.selectButtonLocked]} 
                                    onPress={()=>{
                                        chosenTopic=item.number;
                                        console.log(chosenTopic) 
                                        navigation.navigate("Course")
                                    }}>
                                    <Text style={topic.selectButtonText}>
                                        Select
                                    </Text>
                                </TouchableOpacity> 
                            </View>
                        </View>
                    ))
                }
            </ScrollView>           
        </View>
        <View style={main.navigationButtonArea}> 
            <TouchableOpacity style={main.backButtonLarge}
                    onPress={()=>{
                    navigation.navigate("LearningPath")
                    }}>
                <Text style={main.backButtonText}>
                    BACK
                </Text>
            </TouchableOpacity> 
        </View>   
    </SafeAreaView>
  );
}

export default TopicScreen;
