import React,{Component} from 'react';
import {Image} from 'react-native';

export default class ScrollImg extends Component {
  constructor(props){
      super(props);
      this.props.idx = props.index;
  }
  render(){
      return(
          <Image source={require('../img/1.jpg')} />
      );
  }
}