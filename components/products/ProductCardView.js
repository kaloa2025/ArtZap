import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './productcardview.style'
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
    const navigation=useNavigation();
    const handleBookmark = async (product) => {
        try {
          const response = await axios.post(`http://192.168.251.201/bookmark/create`, product);
          console.log('Bookmark created:', response.data);
        } catch (error) {
          console.error('Failed to create bookmark:', error);
        }
      };
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{item})}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image 
                source={{uri:item.imageUrl}}
                style={styles.image}
            />
            </View>
            <View style={styles.details}>
                <Text style={styles.titte}numberOfLines={1}>{item.title}</Text>
                <Text style={styles.supplier}>{item.supplier}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={()=>handleBookmark(item)}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView
