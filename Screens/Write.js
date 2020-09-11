import *as Permissions from 'expo-permissions'
import { LOCATION } from 'expo-permissions';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,} from 'react-native';
import {Header} from 'react-native-elements'
import GetLocation from 'react-native-get-location'
import *as Speech from 'expo-speech'

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
        title:''

    }

}
componentDidMount(){
    
        
           
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
            <View>
                <Header
                centerComponent={{text:'Write A Story!',style:{fontWeight:"bold"}}}
                />
               
<TouchableOpacity style={{borderWidth:2,borderRadius:25,width:200,height:50}} onPress={this.getLocation}>
<Text style={{marginLeft:25,fontSize:20,marginTop:7}}>Access Location</Text>
    
</TouchableOpacity>
<Text style={{fontSize:15,fontWeight:"bold"}}>Title:</Text>
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
<TouchableOpacity style={{position:"absolute",marginTop:375,marginLeft:this.state.width+10,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.change)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:280,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.brief)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:225,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.name)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:173,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.x)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:this.state.height+355,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.moral)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:115,marginLeft:310,borderWidth:2,borderColor:"red",borderRadius:25}} onPress={()=>{
    Speech.speak(this.state.title)
}}>
  <Text style={{fontSize:20}}>Read</Text>  
</TouchableOpacity>
<TouchableOpacity style={{position:"absolute",marginTop:this.state.height+425,marginLeft:310,borderWidth:4,borderColor:"red",borderRadius:25,backgroundColor:"black"}} onPress={()=>{
    Speech.speak(this.state.title+ "By:+this.state.name"
)
    Speech.speak("Introduction,")
    Speech.speak(this.state.brief)
    Speech.speak("Plot,")
    Speech.speak(this.state.change)
    Speech.speak("Moral")
    Speech.speak(this.state.moral)
}}>
  <Text style={{fontSize:20,color:"white"}}>Read Complete Story</Text>  
</TouchableOpacity>
            </View>
        )
    }
}