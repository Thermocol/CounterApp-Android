import React from 'react';

import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';

export default function SaiRashwant(props)
{
    return(
        <>
        <TextInput secureTextEntry={props.security} placeholder={props.placeholder} style={styles.input}/>
        </>
    );
    
} 

const styles = StyleSheet.create({
    
    input:
    {
        width:"90%",
        backgroundColor:"#fff",
        padding:15,
        marginBottom:10
    }
    
  
});
