import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
import bg1 from '../../assets/images/bg3.jpg'
import bg2 from '../../assets/images/bg1.jpg'
import bg3 from '../../assets/images/bg2.jpg'

const Carousel = () => {
  const slides =[
    bg1,bg2,bg3
  ]
  return (
    <View style={styles.carContainer}>
        <SliderBox images={slides}
        // onClick={()=>navigation.navigate()}
        dotColor={COLORS.secondary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{width:"94%",marginTop:5,height:100}}
        autoplay
        circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carContainer:{
    flex:1,
    alignItems:"center"
  }
})