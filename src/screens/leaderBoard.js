import * as React from 'react';
import { View, Text} from 'react-native';

export const LeaderBoard = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
      }}>
      <Text>LeaderBoard Screen</Text>
      <Text
        style={{fontSize: 14, fontFamily: 'Montserrat-Bold', color: '#333'}}>
        LeaderBoard will update later
      </Text>
    </View>
  );
};
