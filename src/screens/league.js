import * as React from 'react';
import { View, Text} from 'react-native';

export const League = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
      }}>
      <Text
        style={{fontSize: 14, fontFamily: 'Montserrat-Bold', color: '#333'}}>
        No active League, at the moment
      </Text>
    </View>
  );
};
