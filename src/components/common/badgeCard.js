import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BadgeCard = ({ item, onIncrement, onDecrement }) => {
  return (
    <View style={styles.productCard}>
      <Image source={require('../../assets/images/badge.png')} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}{item.earn>0?<Text style={styles.BadgeEarn}> {`x ${item.earn}`}</Text>:null}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        {/* <Text style={styles.BadgeEarn}>${item.price.toFixed(2)} per item</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#EEEAF3',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingHorizontal: 16,
    paddingVertical:20,
    marginBottom: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
   
  },
  productName: {
    fontSize: 14,
    fontFamily:'Montserrat-SemiBold',
    marginBottom: 8,
    color:'#333'
  },
  productDescription: {
    fontSize: 14,
    fontFamily:'Montserrat-Medium',
    color: '#727682',
    // marginBottom: 4,
  },
  BadgeEarn: {
    color: '#FFA600',
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
 
});

export default BadgeCard;
