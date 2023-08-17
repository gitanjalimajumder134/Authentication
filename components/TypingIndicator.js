import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const TypingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#007AFF" />
      <Text style={styles.text}>Typing...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    marginLeft: 5,
    color: '#007AFF',
  },
});

export default TypingIndicator;