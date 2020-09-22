import React from 'react';
import {Text} from 'react-native';




export default function MyComponent(props){
    return(
        <Text>Hello {props.name}, I am your component!</Text>
    );
};