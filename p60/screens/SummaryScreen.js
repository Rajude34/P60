import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class SummaryScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
      </View>
    )
  }
}