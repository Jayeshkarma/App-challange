import React, { useState, useEffect } from 'react';
import {  StyleSheet, View, Animated } from 'react-native';

const ProgressBar=({progress})=> {
  const [progressStatus, setProgressStatus] = useState(0);
  const anim = new Animated.Value(0);

  useEffect(() => {
    onAnimate();
  }, []);

  const onAnimate = () => {
    anim.addListener(({ value }) => {
      setProgressStatus(parseInt(value, 10));
    });

    Animated.timing(anim, {
      toValue: progress||0,
      duration: 1500,
      useNativeDriver: true 
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inner, { width: `${progressStatus}%` }]} />
    </View>
  );
}

export default  ProgressBar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 10,
    backgroundColor: '#2DABAD',
    borderRadius: 10,
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    height: 10,
    borderRadius: 10,
    backgroundColor: '#FE4190',
  },
});
