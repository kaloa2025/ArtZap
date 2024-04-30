//rnfes
import { ImageBackground, ImageBackgroundBase, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import {Ionicons,Fontisto} from '@expo/vector-icons';
import { Welcome } from '../components';
import { COLORS } from '../constants';
import Carousel from '../components/home/Carousel';
import Heading from '../components/home/Heading';
import Navbar from './Navbar';
import ProductRow from '../components/products/ProductRow';
import Gallery from './Gallery';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <SafeAreaView>
        <Navbar/>
        <ScrollView>
          <Welcome/>
          <Carousel/>
          <Heading/>
          <ProductRow/>
          <Gallery/>
          <Footer/>
        </ScrollView>
    </SafeAreaView>
      
  )
}

export default Home
