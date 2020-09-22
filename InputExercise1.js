import React, {useState, useEffect} from 'react';
import {TextInput, Text} from 'react-native';


export default function InputExercise1(){

    const [input, setInput] = useState('');
    
    /* const changeText = (text)=>{
        setInput( text);
        console.log(input);
    }
 */
    useEffect(()=>{
        console.log(input);
    }, [input]);

    return (
        <>
            <Text> Go to the Console to see the output</Text>
            <Text>{input}</Text>
            <TextInput style={{
                height:40,
                borderColor: 'blue',
                borderWidth: 1
            }}
            /* onChangeText = {changeText} */
            onChangeText = {setInput}
            />
        </>

    )

    
}