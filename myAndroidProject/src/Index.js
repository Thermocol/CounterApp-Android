import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import SaiRashwant from './CustomText';

export default function login()
{
    return(
    <View style={styles.container}>
      <Image
      source={require("../assets/login.png")}
      style={{width:200,height:200}}
      />

      <Text style={styles.welcome}>Login Page</Text>
      <SaiRashwant placeholder="Username" security={false}/>
      <SaiRashwant placeholder="Password" security={true}/>

    <View style={styles.buttonspace}>
      <TouchableOpacity>
      <Text style={styles.boxcolor}>   Login   </Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.boxcolor}>   Signup   </Text>
      </TouchableOpacity>
      </View>  

    </View>
);

}
const styles = StyleSheet.create({
  

    container: {
  
      flex: 1,
  
      backgroundColor: 'cyan',
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
    },
    welcome: {
      
      fontSize:50,
      textAlign:'center',
      margin:10,
      color:"blue",
      fontFamily:"Neonderthaw-Regular"
    },
    input:
    {
        width:"90%",
        backgroundColor:"#fff",
        padding:15,
        marginBottom:10
    },
    boxcolor:
    {
      backgroundColor:"yellow",
      width:"100%",
      fontSize:30,
      width:"90%"
      
  
    },
    buttonspace:
    {
      flexDirection:"row",
      justifyContent:"space-between"
    }
  
  
  });