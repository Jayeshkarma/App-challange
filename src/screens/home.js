import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeroSection} from '../components/home/heroSection';
import {PredictionSection} from '../components/home/predictionSection';
import {SummerySection} from '../components/home/summerySection';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heroText}>Today’s Games</Text>
      <View style={styles?.cardContainer}>
        {/* section1 */}
        <HeroSection />
        {/* section2 */}
        <PredictionSection />
        {/* section 3 */}
        <SummerySection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 19,
    backgroundColor: '#fff',
    height: '100%',
  },
  heroText: {
    color: '#333333',
    marginBottom: 17,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  cardContainer: {borderRadius: 4, borderColor: '#EEEAF3', borderWidth: 1},
});
