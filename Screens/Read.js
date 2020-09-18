import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
export default class Read extends React.Component{
    constructor(){
        super();
        this.state={
            count:''
        }
         this.count
    }
    
    componentDidMount(){
      this.getTotalStories;
 
  this.setState({
      count:firebase.firestore.Timestamp.now().toDate().toTimeString()
           
      })
    }

  
getTotalStories=()=>{
        db.collection("Statistics").doc("Additions").get().then((datas)=>{
            this.count=datas.data()
        })
            
   
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
            </View>
        )
    }
}