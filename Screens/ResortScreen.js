import *as Permissions from 'expo-permissions'
import { LOCATION } from 'expo-permissions';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ToastAndroid,KeyboardAvoidingView,Alert,TouchableWithoutFeedback,Image} from 'react-native';
import {Header} from 'react-native-elements'
import GetLocation from 'react-native-get-location'
import *as Speech from 'expo-speech'
import db from '../config'
import firebase from 'firebase'
import {Switch} from 'react-native-switch'

export default class Resort extends React.Component{
    render(){
        return(
            <View>
<Image
style={{width:500,height:500,marginLeft:800,marginTop:250}}
source={require("../assets/Kicked.png")}
/>
<Text style={{fontSize:50,fontWeight:"bold",color:"red",marginLeft:750,marginTop:200,position:"absolute"}}>You have been kicked out</Text>

            </View>
        )
    }
}