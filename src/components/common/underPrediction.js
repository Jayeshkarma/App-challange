//demo for inline style 
import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from 'react-native-wheel-pick';
import SecondaryButton from './secondaryButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const UnderPrediction = ({onPress, text, iconName}) => {
  return (
    <View style={{paddingVertical: 20, paddingHorizontal: 16}}>
      <Text
        style={{
          color: '#333',
          fontSize: 16,
          fontFamily: 'Montserrat-SemiBold',
          marginBottom: 28,
        }}>
        Your Prediction is {text}
      </Text>
      <Text
        style={{
          color: '#727682',
          fontSize: 12,
          fontFamily: 'Montserrat-SemiBold',
          textTransform: 'uppercase',
          marginBottom: 28,
        }}>
        Entry tickets
      </Text>
      <View style={{alignItems: 'center'}}>
        <Picker
          style={{backgroundColor: 'white', width: '90%', height: 150}}
          selectedValue="14"
          pickerData={[
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
          ]}
          onValueChange={value => {
            console.log(value);
          }}
        />
      </View>
      <View style={{marginTop:20}}>
        <Text
          style={{
            color: '#B5C0C8',
            fontSize: 12,
            fontFamily: 'Montserrat-Medium',
          }}>
          You can win{' '}
        </Text>
        <View  style={{flexDirection:'row', justifyContent:'space-between',marginBottom:28}}>
          <View>
            <Text
              style={{
                color: '#03A67F',
                fontSize: 14,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              $2000{' '}
            </Text>
          </View>
          <View  style={{flexDirection:'row',justifyContent:'flex-end',alignItems: 'center',}}>
            <Text
              style={{
                color: '#727682',
                fontSize: 14,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Total{' '}
            </Text>
            <MaterialIcons name='stop-circle' size={13} color="#FFD600" />
            <Text
              style={{
                color: '#333',
                fontSize: 14,
                fontFamily: 'Montserrat-SemiBold',
             
              }}>
              5{' '}
            </Text>
          </View>
        </View>
        <SecondaryButton
        // onPress={handleButtonPress}
        text="Submit my prediction"
      />
      </View>
    </View>
  );
};
