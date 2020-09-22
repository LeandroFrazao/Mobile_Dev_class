import React, {useState, useEffect} from "react";
import {Text, Button, View} from 'react-native';


/* function bt2(){
    const [isHungry, setIsHungry] = useState(true);
    
    return (<Button 
    onPress={()=>{
        setIsHungry(true);
    }}
    disabled={isHungry}
    title={isHungry ? "Hungry!" : "Poop!"}
    />)
   
} */
 


export default function Cat(props) {

    const [isHungry, setIsHungry] = useState(true);
    
    const [counter, setCounter] = useState(0);
    const [timeon,setTimeon] = useState(false);
    useEffect (() =>{ 
        
        const timer = 
        timeon  &&  setTimeout(()=> setCounter(counter+1),1000);
    return () => clearTimeout(timer);
  
    }, [timeon ? counter: null]); 
    
     
    
       
    var btn2;
    if (isHungry){
        btn2= null;
        } else {        
            btn2= (<Button 
            onPress={()=>{
                setIsHungry(true);
            }}
            title="Poop!"
        />)}

    return(
        <>
        <Text>
            I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
        </Text>
        <Text>
            {counter}
            
        </Text>
        <View  style={{ flexDirection:"row"}} >
            <Button
                onPress={() => {
                setIsHungry(false),  setTimeon(true)
                
                }}
                disabled={!isHungry}
                title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
            {btn2 }

        </View>
        <View>
        <Button
                onPress={() => { setTimeon(false), setCounter(0);
                
                }}
                disabled={counter !=0 ? false  : true }
                title= "Reset counter"
            />
        </View>
      </>
    );
}