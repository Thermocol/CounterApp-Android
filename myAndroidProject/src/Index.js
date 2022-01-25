import React, { useState } from 'react';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, StatusBar} from 'react-native';
import SaiRashwant from './CustomText';
export default function login()
{
  const [counter,setCounter] = useState(0);
  const increment = () => {
    setCounter(counter+1);
  }
  const decrement = () => {
    setCounter(counter-1);
  }
  const reset = () => {
    setCounter(count=0);
  }
    return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Counter App</Text>
      <View style={styles.img}>
      <Image 
      source={require("../assets/counterlogo.png")}
      style={styles.img}
      />
    </View>
      
      

      <View style={styles.extra}>
      <Text style={styles.welcome2}>{counter}</Text>
      </View>
      

    
      
    <View style={styles.bg}>

    
      
    <View style={styles.buttonspace}>

    
      
    <Button
    onPress={increment}
    title="Increment"
    color="red"
    accessibilityLabel="Learn more about this purple button"
    />

<Button
    onPress={reset}
    title="RESET"
    color="#808080  "
    accessibilityLabel="Learn more about this purple button"
    />


      <Button
      
      marginStart="40"
      onPress={decrement}
      flexDirection="row"
      title="Decrement"
      color="black"
      accessibilityLabel="Learn more about this purple button"
      />
    </View>
    </View>
  
    </View>
    
    
);

}
const styles = StyleSheet.create({
  bg2:
  {

    backgroundColor:'red',
    marginStart:10
  },
  
  bg: {
    
    backgroundColor: "#FF69B4",
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop:140,
    marginStart:-15,
    borderTopLeftRadius:165,
    borderTopRightRadius:140,

  },
  img:{
      width:200,
      height:200,
      shadowColor: '#202020',
      shadowOffset: {width: 10, height: 10},
      shadowOpacity:0.3,
      shadowRadius: 5,

  },

 
    container: {
  
      
      marginTop:10,
  
      backgroundColor: 'white',
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
    },
    welcome: {
      fontSize:50,
      textAlign:'center',
      margin:10,
      
      color:"red",
      fontFamily:"MochiyPopPOne-Regular",
      textShadowOffset:
      {
        width:5,
        height:5,
      },
      textShadowRadius: 0.1,
      textShadowColor: 'grey',
      
      
      
    },
    welcome2: {
      marginTop:10,
      fontSize:50,
      textAlign:'center',
      margin:10,
      
      color:"red",
      fontFamily:"MochiyPopPOne-Regular",
      textShadowOffset:
      {
        width:5,
        height:5,
      },
      textShadowRadius: 0.1,
      textShadowColor: 'grey',
      
      
      
    },
    input:
    {
        width:"90%",
        backgroundColor:"#fff",
        padding:15,
        marginBottom:10
    },
  
    buttonspace:
    {
      
      
      flexDirection:"row",
      
      justifyContent:"space-between",
      padding:"10%",
      marginTop:10,
      marginStart:70,
      width:"100%"
    },
    extra:
    {
      marginStart:10,
      width:300,
      marginTop:50,
      backgroundColor:"#FFC0CB",
      borderRadius: 10
    }
  
  
  });