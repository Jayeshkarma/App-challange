import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProgressBar from '../common/progressBar';
export const SummerySection = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View style={styles?.rowContainer}>
        <View style={styles.iconTextContainer}>
          <FontAwesome name="user" size={12} color="#727682" />
          <Text style={styles.text}>355 Players</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <FontAwesome name="area-chart" size={12} color="#727682" />
          <Text style={styles.text}>View chart</Text>
        </View>
      </View>
      <View>
        <ProgressBar progress={80} />
      </View>
      <View style={styles.progressBarContainer}>
        <View>
          <Text style={styles.labelText}>232 predicted under</Text>
        </View>
        <View>
          <Text style={styles.labelText}>123 predicted over</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 19,
    paddingHorizontal: 13,
    backgroundColor: '#F6F3FA',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: '#727682',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 8,
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  labelText: {
    color: '#B5C0C8',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
});
