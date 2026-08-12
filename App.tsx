import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { 

  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  return (
     <SafeAreaProvider>
  
    <SafeAreaView style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>Hello from React Native!</Text>
        <Text style={styles.subtitle}>
          I come from React.js, but now I'm on mobile.
        </Text>
      </View>

      <Text style={styles.counterText}>You clicked: {count} times</Text>

    
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>

    </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 20,
    color: 'blue',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
});