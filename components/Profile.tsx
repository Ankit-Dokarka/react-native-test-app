import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const [isFollwing, setIsFollwing] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ankit Bareth</Text>
        <Text style={styles.description}>
          React Native Developer in training
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsFollwing(prev => !prev)}
          style={
            !isFollwing
              ? { marginTop: 5, backgroundColor: '#1877F2', borderRadius: 8 }
              : { marginTop: 5, backgroundColor: '#ccd1d8', borderRadius: 8 }
          }
        >
          <Text
            style={
              !isFollwing
                ? {
                    padding: 10,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }
                : {
                    padding: 10,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }
            }
          >
            {!isFollwing ? 'Follow' : 'Following'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 35,
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: '#9b9898',
  },
  buttonText: {},
});
