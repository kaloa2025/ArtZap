import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, FlatList,Image } from 'react-native';
import React, { useState } from 'react';
import styles from './search.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons, Fontisto } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { COLORS, SIZES } from "../constants";
import bg from '../assets/images/bg6.jpg';
import Carousel from '../components/home/Carousel';
import Navbar from './Navbar';
import axios from 'axios';
import { ProductCardView } from '../components';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/home/Footer';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://192.168.251.201:3000/api/products/search/${searchKey}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("Failed to get products", error);
    } finally {
      setIsLoading(false);
    }
  }
  const navigation=useNavigation();
  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <ImageBackground source={bg} resizeMode='cover' style={styles.bgimage}>
          <Text style={styles.welcomeTxt(COLORS.primary, SIZES.xSmall)}>Unearth your</Text>
          <Text style={styles.welcomeTxt(COLORS.lightWhite, 0)}>INSPIRATION</Text>
        </ImageBackground>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value={searchKey} onChangeText={setSearchKey} placeholder='What are you looking for' />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather name='search' size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.resultContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : searchResults.length === 0 ? (
          <Text>Search your next Inspiration</Text>
        ) : (
          <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{item})}>
          <View style={styles.lcontainer}>
              <View style={styles.limageContainer}>
              <Image 
                  source={{uri:item.imageUrl}}
                  style={styles.limage}
              />
              </View>
              <View style={styles.ldetails}>
                  <Text style={styles.ltitte}numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.lsupplier}>{item.supplier}</Text>
                  <Text style={styles.lprice}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.laddBtn}>
                  <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
      )}
          />
        )}
      </View>
      <Footer/>
    </View>
    
  )
}

export default Search;
