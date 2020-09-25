
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Read from './Screens/Read.js'
import Write from './Screens/Write.js'
import Login from './Screens/LoginScreen'
import Resort from './Screens/ResortScreen'



export default class App extends React.Component {
  render(){
    //
    //<Textinput
    /*value={Status==="granted"}*/
    ///>
  return (
    <View style={{flex:1}} >
     <AppContainer/>
    </View>
  );
}}

const TabNavigator =createBottomTabNavigator({
 Write:{screen:Write},
 Read:{screen:Read}
},{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    if(navigation.state.routeName==="Write"){
     return(
       <Image
       
       style={{width:40,height:40}}
       source={require("./assets/write.png")}
       />
       
     )
    }
    

    if(navigation.state.routeName==="Read"){
      return(
      <Image
      style={{width:40,height:40}}
      source={require("./assets/read.png")}
      />
      )
    }
     

  }
  

})


})
const Navigator=createSwitchNavigator({
Login:{screen:Login},
Out:{screen:Resort},
TabNavigator:{screen:TabNavigator}
})
const AppContainer =createAppContainer(Navigator,TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
