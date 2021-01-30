import *as Permissions from 'expo-permissions'
import { LOCATION } from 'expo-permissions';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ToastAndroid,KeyboardAvoidingView,Alert,TouchableWithoutFeedback,ScrollView} from 'react-native';
import {Header} from 'react-native-elements'
import GetLocation from 'react-native-get-location'
import *as Speech from 'expo-speech'
import db from '../config'
import firebase from 'firebase'
import DropDownPicker from 'react-native-dropdown-picker'

export default class Write extends React.Component{
constructor(){
    super();
    this.state={
        hasGiven:'',
        x:'',
        change:'',
        name:'',
        brief:'',
        moral:'',
        width:900,
        height:300,
        title:'',
        genre:'',
        count:firebase.firestore.Timestamp.now().toDate().toUTCString(),
        duration:12

    }

}
componentDidMount(){
 Alert.alert("Welcome to 999Stories")
// ToastAndroid.show("You can write a story by pressing the icon on the left",2)
 //ToastAndroid.show("You can read stories by pressing the icon on the right",2)


}

        

getLocation=()=>{
   
   GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
})
.then(location => {
    console.log(location);
})
.catch(error => {
    const { code, message } = error;
    console.warn(code, message);
})
    this.setState({
        hasGiven: Permissions.askAsync(Permissions.LOCATION),
        x:location
    })
}
    render(){
        return(
          <ScrollView>
          <Header
                 centerComponent={{text:'Write A Story And Express Your Imagination!', style:{fontWeight:"bold"}}}
                 />
        
          <KeyboardAvoidingView
          
          behavior={"padding"}
          enabled
          >
           
               

<Text  style={{fontSize:15,fontWeight:"bold"}}>Title:</Text>
<TextInput
placeholder="Your Title"
style={{borderWidth:2,borderColor:"black",borderRadius:25,width:300,height:35}}
multiline={false}
value={this.state.title }
  onChangeText={(sf)=>{
    this.setState({
        title:sf
    })
  }}  


/>         
<Text style={{fontSize:15,fontWeight:"bold"}}>Location:</Text>
<TextInput
placeholder="Assumed Location(click to change)"
style={{borderWidth:2,borderColor:"black",borderRadius:25,width:300,height:35}}
value={this.state.x }
  onChangeText={(id)=>{
    this.setState({
        x:id
    })
  }}  


/>
<Text style={{fontSize:15,fontWeight:"bold"}}>Author[Your Name]:</Text>
<TextInput
placeholder=" Author(Your Name)"
style={{borderWidth:2,borderColor:"black",borderRadius:25,width:300,height:35}}
value={this.state.name }
  onChangeText={(id)=>{
    this.setState({
        name:id
    })
  }}  


/>
<Text style={{fontSize:15,fontWeight:"bold"}}>A brief look-and-go:</Text>
<TextInput
placeholder="Brief Explanation"
style={{borderWidth:2,borderColor:"black",borderRadius:25,width:300,height:35}}
value={this.state.brief }
  onChangeText={(id)=>{
    this.setState({
        brief:id
    })
  }}  


/>
<Text style={{fontSize:15,fontWeight:"bold"}}>The main plot:</Text>
<TextInput
placeholder="Your Story"
style={{borderWidth:2,borderColor:"black",borderRadius:25,width:this.state.width,height:this.state.height}}
multiline={true}
value={this.state.change }
  onChangeText={(sf)=>{
    this.setState({
        change:sf
    })
  }}  


/>
<Text style={{fontSize:15,fontWeight:"bold"}}>Moral: </Text>
<TextInput
placeholder="Moral(if any)"
style={{borderWidth:2,borderColor:"black",borderRadius:25,width:300,height:35}}
value={this.state.moral }
  onChangeText={(id)=>{
    this.setState({
        moral:id
    })
  }}  
/>
<TouchableOpacity style={{position:"absolute",marginTop:560,marginLeft:this.state.width+10}} onPress={()=>{
    this.setState({
        width:this.state.width+100
    })
    if(this.state.width>=1800){
        window.alert("Maximum limit reached; Try increasing height")
        this.setState({
        width:1800
        })
    }
    
}}>
<Text>Extend Width</Text>
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:535,marginLeft:this.state.width+10}} onPress={()=>{
    this.setState({
        width:this.state.width-100
    })
}}>
<Text>Retreat Width</Text>
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:510,marginLeft:this.state.width+10}} onPress={()=>{
    this.setState({
        height:this.state.height+100
    })
}}>
<Text>Extend Height</Text>
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:485,marginLeft:this.state.width+10}} onPress={()=>{
    this.setState({
        height:this.state.height-100
    })
}}>
<Text>Retreat Height</Text>
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:345,marginLeft:this.state.width+10,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.change)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25,marginTop:185,position:"absolute"}} onPress={()=>{
    Speech.speak(this.state.brief)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25,marginTop:130}} onPress={()=>{
    Speech.speak(this.state.name)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:75,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.x)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:this.state.height+260,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.moral)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25,marginTop:20}} onPress={()=>{
    Speech.speak(this.state.title)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:this.state.height+425,marginLeft:310,borderWidth:2,borderColor:"black",borderRadius:25,backgroundColor:"white"}} onPress={()=>{
    Speech.speak(this.state.title+ "By:"+this.state.name
)
    Speech.speak("Introduction,")
    Speech.speak(this.state.brief)
    Speech.speak("Plot,")
    Speech.speak(this.state.change)
    Speech.speak("Moral")
    Speech.speak(this.state.moral)
}}>
  <Text style={{fontSize:20,color:"black"}}>Read Complete Story</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:this.state.height+520,marginLeft:310,borderWidth:2,borderColor:"black",borderRadius:25,backgroundColor:"white",height:30,width:150}} onPress={()=>{
  
 //ToastAndroid.showWithGravity(this.state.title+"has been submitted!",this.state.duration)
  db.collection("Stories").add({
    "Title":this.state.title,
    "Author":this.state.name,
    "Location":this.state.x,
    "Introduction":this.state.brief,
    "Story":this.state.change,
    "Moral":this.state.moral,
    "Date":this.state.count,
    "Genre":this.state.genre
  })
  db.collection("Statistics").doc("Additions").update({
 "Total":firebase.firestore.FieldValue.increment(1)
  })
 
  
 if(this.state.genre==='Science'){
   db.collection("Statistics").doc("Genres").update({
    "Science":firebase.firestore.FieldValue.increment(1)
   })
 }
 if(this.state.genre==='Horror'){
  db.collection("Statistics").doc("Genres").update({
   "Horror":firebase.firestore.FieldValue.increment(1)
  })
}
if(this.state.genre==='Adventure'){
  db.collection("Statistics").doc("Genres").update({
   "Adventure":firebase.firestore.FieldValue.increment(1)
  })
}
if(this.state.genre==='Life'){
  db.collection("Statistics").doc("Genres").update({
   "Life":firebase.firestore.FieldValue.increment(1)
  })
}
if(this.state.genre==='Fiction'){
  db.collection("Statistics").doc("Genres").update({
   "Fiction":firebase.firestore.FieldValue.increment(1)
  })
}
if(this.state.genre==='Fable'){
  db.collection("Statistics").doc("Genres").update({
   "Fable":firebase.firestore.FieldValue.increment(1)
  })
  
}
if(this.state.genre==='Thriller'){
  db.collection('Statistics').doc("Genres").update({
    "Thriller":firebase.firestore.FieldValue.increment(1)
  })
}
this.props.navigation.navigate("Read",{heading:this.state.title})
 
  
}}>
 
<Text style={{fontSize:20,marginLeft:40,paddingBottom:10}}>Publish</Text>

            
</TouchableOpacity>



<Text style={{fontSize:15,fontWeight:"bold",marginTop:this.state.height+300,position:"absolute"}}>Genre: </Text>

  
  <DropDownPicker items={[
      {label:'Horror',value:'Horror'},
      {label:'Thriller',value:'Thriller'},
      {label:'Science',value:'Science'},
      {label:'Adventure',value:'Adventure'},
      {label:'Fiction',value:'Fiction'},
      {label:'Fable',value:'Fable'}
    ]}
    activeItemStyle={{backgroundColor:"red"}}
   style={{ marginTop:30,position:"absolute",width:250}}
      placeholder="Choose your genre"
      onChangeItem={(item)=>{
        this.setState({
          genre:item.value
        })
      }}
  >

  </DropDownPicker>
  <Text style={{fontSize:25,marginTop:165}}>Time of upload displayed will be:{this.state.count}</Text>
</KeyboardAvoidingView>
</ScrollView>
        )
    }
}