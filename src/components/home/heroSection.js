import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const HeroSection = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles?.row}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles?.infoText}>Under or Over</Text>
          <MaterialIcons name="info-outline" size={13} color="#D2BAF5" />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles?.timeText}>Starting in</Text>
          <Ionicons name="time-sharp" size={14} color="#D2BAF5" />
          <Text style={styles.countdownText}>03:23:12</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.mainText}>Bitcoin price will be under</Text>
        <View>
          <Text style={styles.mainText}>
            <Text style={styles?.boldText}>$24,524</Text> at 7 a ET on 22nd
            Jan’21
          </Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 19,
    paddingHorizontal: 13,
    backgroundColor: '#6231AD',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  infoText: {
    color: '#D2BAF5',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginRight: 8,
  },
  timeText: {
    color: '#B296DC',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginRight: 4,
  },
  timeIcon: {
    fontSize: 14,
    color: '#D2BAF5',
  },
  countdownText: {
    color: '#B296DC',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 4,
  },
  mainText: {
    color: '#D2BAF5',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  boldText: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
});
