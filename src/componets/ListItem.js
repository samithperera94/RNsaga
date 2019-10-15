import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default ({data}) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>{data.trackName}</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {backgroundColor: '#a74bf2', paddingTop: 5, margin: 3},
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
