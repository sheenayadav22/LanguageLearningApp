import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import FillBlanksScreen from '../screens/FillBlanksScreen';
import LanguageScreen from '../screens/LanguageScreen';
import LevelScreen from '../screens/LevelScreen';
import LearningPathScreen from '../screens/LearningPathScreen';
import TopicScreen from '../screens/TopicScreen';
import CourseScreen from '../screens/CourseScreen';
import LessonTitlePageScreen from '../screens/LessonTitlePageScreen';
import LessonIntroScreen from '../screens/LessonIntroScreen';
import SelectAndListenScreen1 from '../screens/SelectAndListenScreen1';
import SelectAndListenScreen2 from '../screens/SelectAndListenScreen2';
import SelectAndListenScreen3 from '../screens/SelectAndListenScreen3';
import VideoScreen from '../screens/VideoScreen';
import GrammarScreen from '../screens/GrammarScreen';
import RasaChatScreen from '../screens/RasaChatScreen';
import LessonSummaryScreen from '../screens/LessonSummaryScreen';
import QandAScreen from '../screens/QandA';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={HomeNavigator} /> */}
      <Drawer.Screen name="Welcome" component={WelcomeNavigator}/>
      <Drawer.Screen name="Language Selection" component={LanguageNavigator}/>
      <Drawer.Screen name="Lesson Introduction" component={LessonIntroNavigator}/>
      <Drawer.Screen name="Lesson Summary" component={LessonSummaryNavigator}/>
      <Drawer.Screen name="Chatbot" component={RasaChatNavigator}/>
      <Drawer.Screen name="Settings" component={SettingsNavigator}/>
      {/* <Drawer.Screen name="Review Exercise" component={QandANavigator} /> */}
      {/* <Drawer.Screen name="Select and Listen" component={SelectAndListenNavigator} /> */}
      {/* <Drawer.Screen name="Fill in the blank" component={FillBlanksNavigator} /> */}
    </Drawer.Navigator>
  )
}

const WelcomeStack = createStackNavigator();

function WelcomeNavigator() {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="Welcome"
        component={WelcomeScreen}
      />
    </WelcomeStack.Navigator>
  );
};

const QandAStack = createStackNavigator();

function QandANavigator() {
  return (
    <QandAStack.Navigator>
      <QandAStack.Screen
        name="Review Exercise"
        component={QandAScreen}
      />
    </QandAStack.Navigator>
  );
};

const RasaChatStack = createStackNavigator();

function RasaChatNavigator() {
  return (
    <RasaChatStack.Navigator>
      <RasaChatStack.Screen
        name="RasaChat"
        component={RasaChatScreen}
      />
    </RasaChatStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="Language"
        component={LanguageScreen}
      />
    </HomeStack.Navigator>
  );
};


const FillBlanksStack = createStackNavigator();

function FillBlanksNavigator() {
  return (
    <FillBlanksStack.Navigator>
      <FillBlanksStack.Screen
        name="Fill in the blanks screen"
        component={FillBlanksScreen}
      />
    </FillBlanksStack.Navigator>
  );
};

const LessonSummaryStack = createStackNavigator();

function LessonSummaryNavigator(){
return (
  <LessonSummaryStack.Navigator>
      <LessonSummaryStack.Screen
        name="Lesson Summary"
        component={LessonSummaryScreen}
      />
    </LessonSummaryStack.Navigator>
  );
};


const LanguageStack = createStackNavigator();

function LanguageNavigator() {
  return (
    <LanguageStack.Navigator>
      <LanguageStack.Screen
        name="Language"
        component={LanguageScreen}
        />
      <LanguageStack.Screen
        name="Level"
        component={LevelScreen}
        />
      <LanguageStack.Screen
        name="LearningPath"
        component={LearningPathScreen}
        />
      <LanguageStack.Screen
        name="Topic"
        component={TopicScreen}
        />
      <LanguageStack.Screen
        name="Course"
        component={CourseScreen}
        />
      <LanguageStack.Screen
        name="Title Page"
        component={LessonTitlePageScreen}
      />
      <LanguageStack.Screen
        name="Lesson Introduction"
        component={LessonIntroScreen}
      />
      <LanguageStack.Screen
        name="Lesson Video"
        component={VideoScreen}
      />
      <LanguageStack.Screen
        name="Fill in the blanks screen"
        component={FillBlanksScreen}
      />
       <LanguageStack.Screen
        name="Select and Listen Activity 1"
        component={SelectAndListenScreen1}
      />
      <LanguageStack.Screen
        name="Select and Listen Activity 2"
        component={SelectAndListenScreen2}
      />
      <LanguageStack.Screen
        name="Select and Listen Activity 3"
        component={SelectAndListenScreen3}
      />
      <LanguageStack.Screen
        name="Grammar Lesson"
        component={GrammarScreen}
      />
      <LanguageStack.Screen
        name="Review Exercise"
        component={QandAScreen}
      />
    </LanguageStack.Navigator>
  );
};


const LessonIntroStack = createStackNavigator();

function LessonIntroNavigator() {
  return (
    <LessonIntroStack.Navigator>
      <LessonIntroStack.Screen
        name="Title Page"
        component={LessonTitlePageScreen}
      />
      <LessonIntroStack.Screen
        name="Lesson Introduction"
        component={LessonIntroScreen}
      />
      <LessonIntroStack.Screen
        name="Lesson Video"
        component={VideoScreen}
      />
      <LessonIntroStack.Screen
        name="Fill in the blanks screen"
        component={FillBlanksScreen}
      />
       <LessonIntroStack.Screen
        name="Select and Listen Activity 1"
        component={SelectAndListenScreen1}
      />
      <LessonIntroStack.Screen
        name="Select and Listen Activity 2"
        component={SelectAndListenScreen2}
      />
      <LessonIntroStack.Screen
        name="Select and Listen Activity 3"
        component={SelectAndListenScreen3}
      />
      <LessonIntroStack.Screen
        name="Grammar Lesson"
        component={GrammarScreen}
      />
      <LessonIntroStack.Screen
        name="Review Exercise"
        component={QandAScreen}
      />
    </LessonIntroStack.Navigator>
  );
};


const SelectAndListen1Stack = createStackNavigator();
const SelectAndListen2Stack = createStackNavigator();
const SelectAndListen3Stack = createStackNavigator();

function SelectAndListenNavigator() {
  return (
    <SelectAndListen1Stack.Navigator>
      <SelectAndListen1Stack.Screen
        name="Select and Listen Activity 1"
        component={SelectAndListenScreen1}
      />
      <SelectAndListen2Stack.Screen
        name="Select and Listen Activity 2"
        component={SelectAndListenScreen2}
      />
      <SelectAndListen3Stack.Screen
        name="Select and Listen Activity 3"
        component={SelectAndListenScreen3}
      />
    </SelectAndListen1Stack.Navigator>
  );
};
