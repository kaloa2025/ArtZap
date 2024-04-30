import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import styles from './productrow.style';
import useFetch from '../../hook/useFetch';

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
  const top3Products = data.slice(0, 3);
  return (
    <View style={styles.container}>
      <FlatList
        data={top3Products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCardView item={item} />}
        horizontal
        contentContainerStyle={{ paddingHorizontal: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
