import React, { useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, Image, SafeAreaView} from 'react-native';

import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import { TouchableOpacity } from 'react-native-gesture-handler';

let difficulty = "";

function LevelScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon/>
    });
  });
 
  return (
    <SafeAreaView style={main.safeAreaContainer}>
        <View style={main.titleArea20}>
            <View style={main.languageTitle}>
                <Image 
                    style={{width: 20, height: 40}}
                    source={require('../assets/PolygonLeft.png')}
                    resizeMode='contain' />
                <Text style={main.languageTitleText}>Latin</Text>
                <Image 
                    style={{width: 20, height: 40}}
                    source={require('../assets/PolygonRight.png')}
                    resizeMode='contain' />
            </View>
            <Text style={main.subTitleText}>Select your level</Text>
        </View>
        <View style={main.contentArea65}>
            <View>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="1";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level1" style={main.levelSelectText}>
                    1 - Complete Beginner
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="2";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level2" style={main.levelSelectText} >
                    2 - Basic Learner
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="3";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level3" style={main.levelSelectText}>
                    3 - Independent Learner
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="4";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level4" style={main.levelSelectText}>
                    4 - Proficient Learner
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="5";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level5" style={main.levelSelectText}>
                    5 - Advanced Learner
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="6";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level6" style={main.levelSelectText}>
                    6 - Master
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    difficulty="7";
                    console.log(difficulty)
                    navigation.navigate("LearningPath")
                    }}>
                <Text title="level7" style={main.levelSelectText}>
                    7 - Orator
                </Text>
                </TouchableOpacity>
            </View>
        </View> 
        <View style={main.navigationButtonArea}> 
                <TouchableOpacity style={main.backButtonLarge}
                        onPress={()=>{
                        navigation.navigate("Language")
                        }}>
                    <Text style={main.backButtonText}>
                        BACK
                    </Text>
                </TouchableOpacity> 
        </View>  
    </SafeAreaView>
  );
}

export default LevelScreen;
