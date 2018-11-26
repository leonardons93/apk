import React,{Component} from 'react';
import { View,Image, StyleSheet,TouchableHighlight, Dimensions ,Text} from 'react-native';
import { TabView,TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import TabBarMenu from './TabBarMenu';
import contatos1 from './contatos1';
import conversa1 from './conversa1';


export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'primeiro', title: 'CONVERSA' },
      { key: 'segundo', title: 'CONTATOS'}
    ],
  };
  
  _renderHeader = props => <TabBarMenu {...props} />;

  

  render() {
    return (
     
      <TabView
      style={styles.container}
        navigationState={this.state}
        renderScene={SceneMap({
          primeiro: conversa1,
          segundo:contatos1,
        })}
        renderTabBar={this._renderHeader}

        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
 

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
