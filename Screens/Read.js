import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'
export default class Read extends React.Component{
    render(){
        return(
            <View>
                <Header
                centerComponent={{text:'Bored?Read Something!',style:{fontWeight:"bold"}}}
                />
            </View>
        )
    }
}