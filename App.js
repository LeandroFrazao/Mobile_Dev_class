import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import MyComponent from './MyComponent';
import InputExercise1 from './InputExercise1'
import Cat from './Cat';
var name = "Almicar";;

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
   /*
   <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
   */
    <View style={styles.container}>

      {element}              
     
      {mycomp}
      {//<Text>Open up App.js to start working on your app!</Text>
      }
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
