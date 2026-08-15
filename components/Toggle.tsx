import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.containerBase,
        isDarkMode ? styles.containerDark : styles.containerLight,
      ]}
    >
      <View
        style={[
          styles.cardBase,
          isDarkMode ? styles.cardDark : styles.cardLight,
        ]}
      >
        <Text
          style={[
            styles.textTitleBase,
            isDarkMode ? styles.textDark : styles.textLight,
          ]}
        >
          Ankit
        </Text>
        <Text
          style={[
            styles.textSubBase,
            isDarkMode ? styles.textDark : styles.textLight,
          ]}
        >
          Learning React Native
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.buttonBase,
            isDarkMode ? styles.buttonDark : styles.buttonLight,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => setIsDarkMode(prev => !prev)}
        >
          <Text
            style={[
              styles.buttonTextBase,
              isDarkMode ? styles.buttonTextDark : styles.buttonTextLight,
            ]}
          >
            {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBase: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLight: {
    backgroundColor: '#f0f4f8',
  },
  containerDark: {
    backgroundColor: '#1a1a1a',
  },
  cardBase: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  cardLight: {
    backgroundColor: 'white',
  },
  cardDark: {
    backgroundColor: '#333333',
  },
  textTitleBase: {
    fontSize: 30,
    marginBottom: 5,
  },
  textSubBase: {
    fontSize: 15,
    marginBottom: 20,
  },
  textLight: {
    color: 'black',
  },
  textDark: {
    color: 'white',
  },
  buttonBase: {
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
  },
  buttonLight: {
    backgroundColor: 'black',
  },
  buttonDark: {
    backgroundColor: 'white',
  },
  buttonTextBase: {
    fontWeight: 'bold',
  },
  buttonTextLight: {
    color: 'white',
  },
  buttonTextDark: {
    color: 'black',
  },
  buttonPressed: {
    transform: [{ scale: 0.95 }],
  },
});
