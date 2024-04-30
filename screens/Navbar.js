//rnfes
import { ImageBackground, ImageBackgroundBase, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './home.style'
import {Ionicons,Fontisto} from '@expo/vector-icons';
import { COLORS } from '../constants';
import { ProductCardView } from '../components';
import bookFetch from '../hook/bookFetch';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation=useNavigation();
  const { data: bookmarks } = bookFetch();
  const cartCount = bookmarks ? bookmarks.length : 0;
  return (
    <View>
    <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name='location-outline' size={20}/>
            <Text style={styles.location}>India</Text>
            <View style={{alignItems:'flex-left'}}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>{"  "}{cartCount}</Text>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                <Fontisto name='bookmark' size={20} color={COLORS.primary}/>
              </TouchableOpacity>
            </View>
          </View>
    </View>
    </View>
  )
}

export default Navbar