import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';

export default function PlatformExample() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {/* NETWORK IMAGE: Needs width/height and { uri: '...' } */}
        <Image
          style={styles.avatar}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.name}>React Native</Text>
          <Text style={styles.bio}>Building mobile apps with JavaScript.</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Message</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',

    elevation: Platform.OS === 'android' ? 5 : 0,

    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: Platform.OS === 'ios' ? marginBottom : 15,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
