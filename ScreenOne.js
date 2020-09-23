import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyComponent from './MyComponent';
import InputExercise1 from './InputExercise1'
import Cat from './Cat';


var user = {
    firstname: 'Almicar',
    lastname: 'Aponte'
  };
  const formatName = (user)=>{
    return user.firstname + ' ' + user.lastname;
  }
  
  var element = <Text>Hello, {formatName(user)}</Text>
  
  var mycomp =   <MyComponent/>

export default function ScreenOne({navigation}){
    return(
        <View>
            <Text> Hello</Text>
            <Button 
                onPress = {()=>{
                    navigation.navigate('Two')
                }}
                title = "Go to Screen Two"
            />
            <br/>
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

        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:5,
    //width: '50%',
    padding: '5%',
    borderColor: '#666',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 