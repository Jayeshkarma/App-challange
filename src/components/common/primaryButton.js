import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'; // You can use any icon library you prefer

const PrimaryButton = ({ onPress, text, iconName, }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
 <MaterialCommunityIcons  name={iconName} size={20} color="white" />
        <Text style={styles.buttonText}>{text}</Text>
   </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#452C55', // Change this to your desired background color
    borderRadius: 45, // Adjust the border radius as needed
    paddingVertical: 11,
    width:"100%",
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Change the text color as needed
    marginHorizontal: 5, // Adjust the spacing between the icon and text
    fontSize: 14, // Adjust the text size as needed
   fontFamily:'Montserrat-SemiBold'
  },
});

export default PrimaryButton;
