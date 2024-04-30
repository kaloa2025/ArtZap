import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import styles from './Welcome.style'
import { COLORS, SIZES } from '../../constants'
import {Feather,Ionicons} from '@expo/vector-icons'
import { TextInput } from 'react-native'
import bg from '../../assets/images/bg7.jpg'
//bg5,6,7
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation=useNavigation();
  return (
    <View>
        <View style={styles.container}>
          <ImageBackground source={bg} resizeMode='cover' style={styles.bgimage}>
            <Text style={styles.welcomeTxt(COLORS.primary,SIZES.xSmall)}>Explore the</Text>
            <Text style={styles.welcomeTxt(COLORS.white,0)}>FUTURE OF ART</Text>
          </ImageBackground>
        </View>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name='search' size={20} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput} value='' onPressIn={()=>navigation.navigate("Search")} placeholder='What are you looking for'/>
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name='camera-outline' size={SIZES.xLarge} color={"white"}/>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Welcome
//rnfe