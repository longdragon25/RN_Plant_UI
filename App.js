import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { LogBox } from "react-native";
import {PlantDetail} from './screens/'
import React from 'react';
import Tabs from './navigation/tabs'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

LogBox.ignoreAllLogs(true);
const App =()=>{
    return(
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
            headerShown: false
          }}
          initialRouteName= {"Home"}
        >
          <Stack.Screen name="Home" component={Tabs}/>
          <Stack.Screen name="PlantDetail" component={PlantDetail} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default ()=>{
  return <App/>
}