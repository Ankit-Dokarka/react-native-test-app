import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. SCREEN A (Home)
function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Home Screen</Text>
      <Pressable
        style={styles.button}
        // 👇 The magic command to push the next screen onto the stack
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </Pressable>
    </View>
  );
}

// 2. SCREEN B (Details)
function DetailsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>This is a new screen!</Text>
    </View>
  );
}

// 3. CREATE THE STACK NAVIGATOR
const Stack = createNativeStackNavigator();

// 4. MAIN APP COMPONENT
export default function TwoScreen() {
  return (
    // Must wrap everything in NavigationContainer
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: 'white', // Changes the title and back button color
        }}
      >
        {/* Register your screens here */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
