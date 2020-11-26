import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreens from './screens/writeStoryScreens';
import ReadStoryScreens from './screens/readStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreens},
  ReadStory: {screen: ReadStoryScreens},
},
{
  defaultNavigationOptions:({navigation})=>{
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='Write'){
        return(
          <Image source={require("./assets/write.png")}
          style={{width:40, height:40}}></Image>
    
        )
      }
      else if(routeName==="Read"){
        return(
          <Image source={require("./assets/read.png")}
          style={{width:40, height:40}}></Image>
    
        )
      }
    }
    }
    }

);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
