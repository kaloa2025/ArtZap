//rnfe
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home,Profile,Search} from '../screens'
// import Home from '../screens/Home';
// import Profile from '../screens/Profile';
// import Search from '../screens/Search';
import {Ionicons} from '@expo/vector-icons'

const Tab=createBottomTabNavigator();
const screenOptions={
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarSty1e: {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  elevation: 0,
  height: 70
  }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Search" component={Search} options={{tabBarIcon:({focused})=>{return <Ionicons name={focused?'search-sharp':"search-outline"} size={30}/>}}}/>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({focused})=>{return <Ionicons name={focused?"home":"home-outline"} size={24}/>}}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({focused})=>{return <Ionicons name={focused?"person":"person-outline"} size={24}/>}}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation