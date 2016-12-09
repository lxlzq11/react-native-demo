import React,{Component} from 'react';
import {AppRegistry,Image,ScrollView,Text,View} from 'react-native';

class IScrolled extends Component{
  render(){
    return(
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/2.jpg')} />
        <Image source={require('./img/3.jpg')} />
        <Image source={require('./img/4.jpg')} />
        <Image source={require('./img/5.jpg')} />
        <Image source={require('./img/6.jpg')} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/2.jpg')} />
        <Image source={require('./img/3.jpg')} />
        <Image source={require('./img/4.jpg')} />
        <Image source={require('./img/5.jpg')} />
        <Image source={require('./img/6.jpg')} />
        <Text style={{fontSize:96}}>Scrolling down</Text>
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/2.jpg')} />
        <Image source={require('./img/3.jpg')} />
        <Image source={require('./img/4.jpg')} />
        <Image source={require('./img/5.jpg')} />
        <Image source={require('./img/6.jpg')} />
        <Text style={{fontSize:96}}>What's the best</Text>
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/2.jpg')} />
        <Image source={require('./img/3.jpg')} />
        <Image source={require('./img/4.jpg')} />
        <Image source={require('./img/5.jpg')} />
        <Image source={require('./img/6.jpg')} />
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={require('./img/1.jpg')} />
        <Image source={require('./img/2.jpg')} />
        <Image source={require('./img/3.jpg')} />
        <Image source={require('./img/4.jpg')} />
        <Image source={require('./img/5.jpg')} />
        <Image source={require('./img/6.jpg')} />
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    )
  }
}


AppRegistry.registerComponent('reactN',() => IScrolled);