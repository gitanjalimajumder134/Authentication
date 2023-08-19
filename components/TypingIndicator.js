import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const TypingIndicator = ({ isTyping }) => {
  return (
    <View style={styles.container}>
      {isTyping ? (
        <ActivityIndicator size="small" color="#aaa" />
      ) : (
        <Text style={styles.text}>typing...</Text>
      )}
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