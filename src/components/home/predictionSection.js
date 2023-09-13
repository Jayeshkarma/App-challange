import * as React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from '../common/bottomSheet';
export const PredictionSection = ({navigation}) => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.infoRow}>
        <View>
          <Text
            style={styles?.labelText}>
            Prize Pool
          </Text>
          <Text
            style={styles.valueText}>
            $12,000
          </Text>
        </View>
        <View>
          <Text
             style={styles?.labelText}>
            Under
          </Text>
          <Text
             style={styles.valueText}>
            3.25x
          </Text>
        </View>
        <View>
          <Text
             style={styles?.labelText}>
            Over
          </Text>
          <Text
            style={styles.valueText}>
            1.25x
          </Text>
        </View>
        <View>
          <Text
             style={styles?.labelText}>
            Entry Fees
          </Text>
          <View
            style={styles.entryFeeRow}>
            <Text
              style={{
                color: '#333',
                fontSize: 14,
                fontFamily: 'Montserrat-SemiBold',
                marginRight: 8,
              }}>
              5
            </Text>
            <MaterialIcons name="stop-circle" size={13} color="#FFD600" />
          </View>
        </View>
      </View>
      <View>
        <Text
          style={styles?.predictionText}>
          What’s your prediction?
        </Text>

        <View
          style={styles.bottomSheetContainer}>
          <View
            style={styles?.bottomSheetItem}>
            <BottomSheet type={1} text="Under" iconName="arrow-down-bold" />
          </View>
          <View
            style={styles?.bottomSheetItem}>
            <BottomSheet type={2} text="Over" iconName="arrow-up-bold" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoColumn: {
    flex: 1,
  },
  labelText: {
    color: '#B5C0C8',
    marginBottom: 8,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  valueText: {
    color: '#333',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  entryFeeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  entryFeeIcon: {
    color: '#FFD600',
  },
  predictionText: {
    color: '#727682',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  bottomSheetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  bottomSheetItem: {
    width: '50%',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
