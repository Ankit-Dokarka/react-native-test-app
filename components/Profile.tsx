import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ankit Bareth</Text>
        <Text style={styles.description}>
          React Native Developer in training
        </Text>

        <Pressable
          onPress={() => setIsFollowing(prev => !prev)}
          style={({ pressed }) => [
            styles.buttonBase,
            isFollowing ? styles.buttonFollowing : styles.buttonFollow,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text
            style={[
              styles.textBase,
              isFollowing ? styles.textFollowing : styles.textFollow,
            ]}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </Text>
        </Pressable>
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
    marginBottom: 15,
  },
  buttonBase: {
    marginTop: 5,
    borderRadius: 8,
  },
  buttonFollow: {
    backgroundColor: '#1877F2',
  },
  buttonFollowing: {
    backgroundColor: '#ccd1d8',
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  textBase: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textFollow: {
    color: 'white',
  },
  textFollowing: {
    color: 'black',
  },
});
