import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';




export default function ScreenOne({navigation}){
    
    const [long,setLong]= useState('');
    const [latitude,setLat]= useState('');
    const [country,setCountry]= useState('');

const OpenCage =()=> {
    fetch('https://api.opencagedata.com/geocode/v1/json?q='+latitude+'+'+long+ '&key=852f62282a1c4d67a0726b8f8d62eaf6')
    .then((response) => {
        return response.json()
    })
    .then((json)=> {
    console.log(json.results[0].components.country);
    setCountry( json.results[0].components.country);
    })
};
    return(
        <View>
            <Text> Hello</Text>
            <Button 
                onPress = {()=>{
                    navigation.navigate('One')
                }}
                title = "Go to Screen One"
            />

            <br/><br/><br/>
            {OpenCage}
            <View style={styles.container}>
            
                <TextInput style={ styles.textinput }
                    /* onChangeText = {changeText} */
                    onChangeText = {setLat}
                    placeholder ="Latitude"
                />
                <TextInput style={ styles.textinput }
                    /* onChangeText = {changeText} */
                    onChangeText = {setLong}
                    placeholder ="Longitude"
                />

                <Button
                    onPress={OpenCage}
                    title = "Find Country"
                />

                <Text>Country: {country}</Text>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {height:40,
        width:'10%',
        borderColor: 'blue',
        borderWidth: 1,
        textAlign:"center"
    },
  });



    


