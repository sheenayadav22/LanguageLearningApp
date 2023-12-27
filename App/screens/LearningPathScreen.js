import React, { useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, SafeAreaView} from 'react-native';

import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import { TouchableOpacity } from 'react-native-gesture-handler';

let learningPath = "";

function LearningPathScreen() {
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
            <Text style={main.subTitleText}>Select your learning path</Text>
        </View>
        <View style={main.contentArea65}>
            <View>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    learningPath="Classical Studies Scholar";
                    console.log(learningPath)
                    navigation.navigate("Topic")
                    }}>
                    <Text title="Classical" style={main.levelSelectText}>
                        Classical Studies Scholar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    learningPath="Graeco-Roman Historian";
                    console.log(learningPath)
                    navigation.navigate("Topic")
                    }}>
                    <Text title="Graeco" style={main.levelSelectText} >
                        Graeco-Roman Historian
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    learningPath="Romance Learner";
                    console.log(learningPath)
                    navigation.navigate("Topic")
                    }}>
                    <Text title="Romance" style={main.levelSelectText}>
                        Romance Learner
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={main.levelButton}
                    onPress={()=>{
                    learningPath="Professional Wordsmith";
                    console.log(learningPath)
                    navigation.navigate("Topic")
                    }}>
                    <Text title="Wordsmith" style={main.levelSelectText}>
                        Professional Wordsmith
                    </Text>
                </TouchableOpacity>
            </View>
        </View>   
        <View style={main.navigationButtonArea}> 
            <TouchableOpacity style={main.backButtonLarge}
                    onPress={()=>{
                    navigation.navigate("Level")
                    }}>
                <Text style={main.backButtonText}>
                    BACK
                </Text>
            </TouchableOpacity> 
        </View>
    </SafeAreaView>
  );
}

export default LearningPathScreen;
