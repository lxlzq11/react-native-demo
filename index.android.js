import React,{Component} from 'react';
import {AppRegistry,Image,ScrollView,Text,View} from 'react-native';

class IScrolled extends Component{
  render(){
    return(
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/1.jpg')} />
      </ScrollView>
    )
  }
}


AppRegistry.registerComponent('reactN',() => IScrolled);