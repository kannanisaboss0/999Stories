import *as Permissions from 'expo-permissions'
import React, { forwardRef } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ToastAndroid,KeyboardAvoidingView,Alert,FlatList,} from 'react-native';
import {Header,SearchBar} from 'react-native-elements'
import GetLocation from 'react-native-get-location'
import *as Speech from 'expo-speech'
import db from '../config'
import firebase from 'firebase'
export default class Read extends React.Component{
    constructor(){
        super();
        this.state={
            count:'',
            text:'',
            all:''
        }
        
    }
    
    componentDidMount(){
     Permissions.askAsync(Permissions.LOCATION)
 
  this.setState({
      count:firebase.firestore.Timestamp.now().toDate().toTimeString()
           
      })
    }
retrieveStories=async()=>{
    const Stories=await db.collection("Strories").get()
    Stories.docs.map((doc)=>{
        this.setState({
            all:doc.data()
        })
    })
}
searchFilter=async()=>{
    const FilteredStories=await db.collection("Stories").where("title","==",this.state.text).get()
this.state.all.push(FilteredStories)
}  

            
   
    
    render(){
        return(
            <View>
                <Header
                centerComponent={{text:'Bored?Read Something!',style:{fontWeight:"bold"}}}
                />
                <Text onPress={()=>{
                    this.getTotalStories
                }} style={{fontSize:25}}>Your country's time:{this.state.count}{this.count}</Text>
                <SearchBar
                value={this.state.text}
                spellCheck={true}
               blurOnSubmit={true}
               
                onChangeText={(c)=>{
                    this.setState({
                   
                        text:c
                    })
                }
                }
                />
                <TouchableOpacity onPress={()=>{
                  this.retrieveStories
                   
                   

                   

                   
                }}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <FlatList data={this.state.all} renderItem={({item})=>(
                    <Text>{item}</Text>
                )}>


                </FlatList>
            </View>
        )
    }
}