import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import MyComponent from './MyComponent';
import InputExercise1 from './InputExercise1'
import Cat from './Cat';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';


const navigator = createStackNavigator(
  {
    One: ScreenOne,
    Two: ScreenTwo,
  },
  {
    initialRouteName:'One',
    defaultNavigationOptions: {
      title: 'App',
    }
  }
  );
  export default createAppContainer(navigator);



/* //var name = "Almicar";;
var user = {
  firstname: 'Almicar',
  lastname: 'Aponte'
};

//function formatName(user){
const formatName = (user)=>{
  return user.firstname + ' ' + user.lastname;
}

var element = <Text>Hello, {formatName(user)}</Text>

var mycomp =   <MyComponent/>

export default function App() {
  return (
  
    <View style={styles.container}>

      {element}              
     
      {mycomp}
      <StatusBar style="auto" />
      <MyComponent name={formatName(user)}/>
      
      <br />
      <Cat name="Kitty"/>
      <Cat name="Hades"/>
      
      <InputExercise1/>
     
    </View>
  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:5,
    borderColor: '#666',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */