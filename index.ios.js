import React,{Component} from 'react';
import { AppRegistry,ListView,Text,View } from 'react-native';
import ScrollImg from './components/ScrollImg.js';

class ListViewBasics extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    }
  }

  render(){
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ScrollImg>rowData</ScrollImg>} />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactN',() => ListViewBasics);