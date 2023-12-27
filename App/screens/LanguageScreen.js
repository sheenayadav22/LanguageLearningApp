import React, { useEffect , useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import MenuIcon from '../components/MenuIcon';
import main from '../styles/main';
import form from '../styles/form.component.style';

function LanguageScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      showHeader: true,
      headerLeft: (StackHeaderLeftButtonProps) => <MenuIcon/>
    });
  });

  const [state, setState] = useState();
 
  return (
    <SafeAreaView style={main.safeAreaContainer}>
      <View style={main.titleArea20}>
        <Text style={main.subTitleText}>Select your language</Text>
      </View>
      <View style={main.contentArea65} >
        <Picker 
          style={form.picker}
          selectedValue={state}
          onValueChange={(itemValue, itemIndex) => {setState(itemValue)}}>
          <Picker.Item label="Classical Latin" value="lang0" />
          <Picker.Item label="Classical Greek" value="lang1" />
          <Picker.Item label="Hellenistic Greek" value="lang2" />
          <Picker.Item label="Ancient Hebrew" value="lang3" />
        </Picker>
      </View>
      <View style={main.navigationButtonArea}>
        <View style={main.navButtonPair}>
          <TouchableOpacity style={main.navButton}
                onPress={()=>{
                navigation.navigate("Welcome")
                }}>
            <Text style={main.navButtonText}>
                BACK
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={main.navButton}
                onPress={()=>{
                navigation.navigate("Level")
                }}>
            <Text style={main.navButtonText}>
                CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LanguageScreen;
