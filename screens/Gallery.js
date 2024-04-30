import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import ProductCardView from '../components/products/ProductCardView';
import styles from '../components/products/productrow.style';
import useFetch from '../hook/useFetch';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
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
      <ScrollView horizontal>
        <View style={{backgroundColor:COLORS.primary}}>
            <Text style={styles.gallery}>GALLERY</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ProductCardView item={item}/>}
            numColumns={3}
            contentContainerStyle={{ paddingHorizontal: SIZES.medium, marginVertical:SIZES.medium}}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default ProductRow;
