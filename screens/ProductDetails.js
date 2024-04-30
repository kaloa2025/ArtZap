import { TouchableOpacity, Text, View, Image, TextComponent } from 'react-native'
import React,{useState} from 'react'
import styles from './productDetails.style'
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import { useNavigation, useRoute } from '@react-navigation/native'

const ProductDetails = ({navigation}) => {
    const route=useRoute();
    const {item} =route.params
    console.log(item);
    const[count,setCount]=useState(1)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>1)setCount(count-1)
    }
  return (
    <View style={styles.container}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='chevron-back-circle' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
                <Ionicons name='heart' size={30} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
        <Image 
        source={{uri:item.imageUrl}}
        style={styles.image}
        />
        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>

            <View style={styles.ratingRow}>
                <View style={styles.rating}>
                    {[1,2,3,4,5].map((index)=>(
                        <Ionicons key={index} name='star' size={18} color="gold"/>
                    ))}
                    <Text style={styles.ratingText}>(4.9)</Text>
                </View>
                <View style={styles.rating}>
                <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons name='plus' size={18} style={{color:COLORS.primary}}/>
                    </TouchableOpacity>
                    <Text>  {count}   </Text>
                    <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons name='minus' size={18} style={count>1?{color:COLORS.black}:{color:COLORS.gray}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.descriptionWrapper} >
                <Text style={styles.description}>Description</Text>
                <Text style={styles.dText}>{item.description}</Text>
            </View>

            <View style={{marginBottom:SIZES.small}}>
                <View style={styles.location}>
                    <View style={{flexDirection:'row'}}>
                        <Ionicons name='location-outline' size={18}/>
                        <Text>  {item.location}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <MaterialCommunityIcons name='truck-delivery-outline' size={18}/>
                        <Text>  Free Delivery</Text>
                    </View>
                </View>
            </View>

            <View style={styles.cartRow}>
                <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                    <Text style={styles.cartTitle}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                    <Fontisto name="shopping-bag" size={15} color={COLORS.lightWhite}/>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default ProductDetails