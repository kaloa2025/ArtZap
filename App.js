import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { useFonts } from 'expo-font';
import Cart from './screens/Cart';
import { NewRivals, ProductDetails } from './screens';

const Stack=createNativeStackNavigator();

export default function App() {

  const [fontsLoaded]= useFonts({
    black: require("./assets/fonts/Inter-Black.ttf"),
    bold: require("./assets/fonts/Inter-Bold.ttf"),
    extrabold: require("./assets/fonts/Inter-ExtraBold.ttf"),
    extralight: require("./assets/fonts/Inter-ExtraLight.ttf"),
    light: require("./assets/fonts/Inter-Light.ttf"),
    medium: require("./assets/fonts/Inter-Medium.ttf"),
    regular: require("./assets/fonts/Inter-Regular.ttf"),
    semibold: require("./assets/fonts/Inter-SemiBold.ttf"),
    thin: require("./assets/fonts/Inter-Thin.ttf"),
  })

  const onLayoutRootView=useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);
  if(!fontsLoaded){
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="ProductList" component={NewRivals} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
