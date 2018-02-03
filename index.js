import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/header'
import List from './src/list'

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Taylor Swift Albums'}/>
        <List />
    </View>    
); 

AppRegistry.registerComponent('tsalbums', () => App);