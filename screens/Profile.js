//rnfes]
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from './Navbar'
import styles from './profile.style'
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import ProductCardView from '../components/products/ProductCardView';
import bookFetch from '../hook/bookFetch';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
      const { data, isLoading, error } = bookFetch();
      // Render loading indicator if data is still loading
      if (isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
          </View>
        );
      }
      if (error) {
        return (
          <View style={styles.container}>
            <Text>Something went wrong!</Text>
          </View>
        );
      }
      return (
        <GestureHandlerRootView>
          <SafeAreaView>
          <Navbar/>  
          <ScrollView horizontal>
            <View style={styles.bcontainer}>
                <Text style={styles.gallery}> YOUR BOOKMARKS </Text>
              <FlatList
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <ProductCardView item={item}/>}
                contentContainerStyle={{ paddingHorizontal: SIZES.medium, marginVertical:SIZES.medium}}
              />
            </View>
          </ScrollView>
          </SafeAreaView>
        </GestureHandlerRootView>
  );
}

export default Profile
