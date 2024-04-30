import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './heading.style'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const Heading = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("ProductList")}>
            <Ionicons name='grid' size={22} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Heading