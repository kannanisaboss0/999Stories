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

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            gmail:'',
            password:'',
            triesLeft:3,
            allowVisuals:true,
            setScreen:"Read",
            setSwitch:true,
            setsecSwitch:false,
            imageSet:"read"
            
            
        }
    }

  
    
    loginAuthentication=async(email,password)=>{
        if(email&&password){
        try{
            const Auth=await firebase.auth().signInWithEmailAndPassword(email,password)
            if(Auth){
                this.props.navigation.navigate(this.state.setScreen)
            }
          
              
        }
        
      
        catch(error){
            switch(error.code){
                case "auth/invalid-email":window.alert("Invalid email ")
                 break   
                 case "auth/user-not-found":window.alert("User not found")
                 break
                 case "auth/wrong-password":window.alert("Invalid password")
            }
            this.setState({
                triesLeft:this.state.triesLeft-1
            })
        }
    }
    }
    render(){
        return(
            <KeyboardAvoidingView>
               
        
                <Image
                style={{height:100,width:100,position:"absolute",marginLeft:800,marginTop:230}}
                source={require("../assets/favicon.png")}
                />
                <Image
                style={{height:150,width:150,position:"absolute",marginLeft:950,marginTop:200}}
                source={require("../assets/whitehat.png")}
                />
                 <Text style={{marginTop:150,marginLeft:800,fontSize:32,fontWeight:"bold"}}>Special Thanks To:</Text>
                 <Text style={{marginTop:355,marginLeft:800,fontSize:32,fontWeight:"bold",position:"absolute"}}>For supporting me!</Text>               
                <TextInput
                placeholder="Your email address[abc@example.com]"
                style={{borderWidth:2,borderColor:"black",width:300,height:40,marginLeft:800,marginTop:400,position:"absolute"}}
                keyboardType={"email-address"}
                value={this.state.gmail}
                onChangeText={(google)=>{
                    this.setState({
                        gmail:google
                    })
                }}
                />
                <Text style={{marginLeft:900,position:"absolute",marginTop:600}}>Do you want to read or write?</Text>
                <TouchableOpacity  style={{marginLeft:900,position:"absolute",marginTop:800}}>
                    <Image
                    style={{height:150,width:150,marginBottom:50,marginRight:50}}
                    source={require("../assets/"+this.state.imageSet+".png")}
                    />
                <Switch
                value={this.state.setSwitch}
                
                onValueChange={()=>{
                    if(this.state.setSwitch===this.state.setsecSwitch){
                        this.setState({
                            setScreen:"Read"
                        })
                    }
                   
                    this.setState({
                
                    setScreen:"Write",
                    setSwitch:!this.state.setSwitch,
                    setsecSwitch:this.state.setSwitch,
                    imageSet:"write"
                   
                })}}
                activeText={this.state.setScreen}
                inActiveText=""
                              
                
                />
                <Switch
                value={this.state.setsecSwitch}
                
                onValueChange={()=>{
                    if(this.state.setsecSwitch===this.state.setSwitch){
                        this.setState({
                            setScreen:"Write"
                        })
                    }
                   
                    this.setState({
                        
                    setScreen:"Read",
                    setsecSwitch:!this.state.setsecSwitch,
                    setSwitch:this.state.setsecSwitch,
                    imageSet:"read"
                   
                })}}
                activeText={this.state.setScreen}
                inActiveText=""
                              
                
                />
                 </TouchableOpacity>
                <TextInput
                placeholder="Your email's password"
                value={this.state.password}
                secureTextEntry={this.state.allowVisuals}
                style={{borderWidth:2,borderColor:"black",width:300,height:40,marginLeft:800,marginTop:450,position:"absolute"}}
                onChangeText={(slip)=>{
                    this.setState({
                        password:slip
                    })
                }}
                />
               
                <TouchableOpacity style={{position:"absolute",marginTop:500,marginLeft:875,borderWidth:3,}} onPress={()=>{
                    if(this.state.triesLeft>0){
                    this.loginAuthentication(this.state.gmail,this.state.password)
                    }
                    else{
                        this.props.navigation.navigate("Out")
                    }
                }}>
                    <Text style={{fontSize:32}}>
                       Login {this.state.setScreen}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPressIn={()=>{
                    this.setState({
                    allowVisuals:false
                    })
                }}
                onPressOut={()=>{
                    this.setState({
                        allowVisuals:true 
                    })
                }}
                
                >
                    <Image
                    style={{width:25,height:25,position:"absolute",marginLeft:1100,marginTop:265,}}
                    source={require("../assets/see.png")}
                    />
                </TouchableOpacity>
                <Text style={{marginLeft:800,position:"absolute",marginTop:550,fontSize:25,fontWeight:"bold"}}>Tries Left:{this.state.triesLeft}</Text>

            </KeyboardAvoidingView>
        )
            }
        }
