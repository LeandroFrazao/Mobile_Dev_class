import React from 'react';
import {Text, View, Button} from 'react-native';




export default function ScreenOne({navigation}){
    return(
        <View>
            <Text> Hello</Text>
            <Button 
                onPress = {()=>{
                    navigation.navigate('One')
                }}
                title = "Go to Screen One"
            />

        </View>
    );
}