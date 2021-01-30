import *as Permissions from 'expo-permissions'
import React, { forwardRef } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ToastAndroid,KeyboardAvoidingView,Alert,FlatList,ScrollView} from 'react-native';
import {Header,SearchBar,ListItem,Card} from 'react-native-elements'
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
            AllStories:[],
            trans:'',
            cardVisible:false,
            story:'',
            moral:'',
            title:'',
            by:''
        }
        this.requestStories=null
    }
    getAllStroies=()=>{
        db.collection("Stories").onSnapshot((snapshot)=>{
   var AllStories=snapshot.docs.map(document=>
    document.data()
    )
    this.setState({
        AllStories:AllStories
    })
    })
}
    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i}
            rightSubtitle={item.Date}
            title={item.Title}
            rightTitle={"By: "+item.Author}
            subtitle={item.Introduction}
            leftAvatar={
                <Text style={{fontWeight:"bold",color:"red",}}>{item.Genre}</Text>
            }
            bottomDivider
            rightElement={
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        story:item.Story,
                        by:item.Author,
                        title:item.Title,
                        moral:item.Moral ,
                        cardVisible:true
                    })
                }} style={{borderWidth:2,borderColor:"black"}}>
                    <Text style={{alignSelf:"center",color:"red"}}>Read Story</Text>
                </TouchableOpacity>
            }

            />
        )
    }
    componentDidMount(){
this.requestStories=this.getAllStroies()
    }
    render(){
        return(
        <View>
                 <Header
                 centerComponent={{text:'Read A Story And Get Inspired!', style:{fontWeight:"bold"}}}
                 />
            <FlatList data={this.state.AllStories} renderItem={this.renderItem} keyExtractor={(item,index)=>{
                    index.toString()
                }}>
                   
                  
            </FlatList>
               {this.state.cardVisible===true?
                <Card title="The Story"titleStyle={{fontWeight:"bold",fontSize:32}} containerStyle={{width:"50%",height:500,alignSelf:"center",position:"absolute"}}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>{
                        this.setState({
                            cardVisible:false
                        })
                    }} style={{marginLeft:"97%",borderWidth:2}}>
                        <Text style={{fontWeight:"bold",fontSize:25,alignSelf:"center"}}>X</Text>
                    </TouchableOpacity>
                    <Text style={{fontWeight:"bold",color:"red",alignSelf:"center",fontSize:32}}>{this.state.title}</Text>
                    <Text style={{fontSize:25,alignSelf:"center"}}> By:{this.state.by} </Text>
                    <Text style={{fontSize:20,alignSelf:"center"}}>{this.state.story} </Text>
                    <Text style={{fontWeight:"bold",fontSize:22}}>Moral:"{this.state.moral}"</Text>
                </ScrollView>
            </Card>:
            null} 
           
                
        </View>
        )
    }
}