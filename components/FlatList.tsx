import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

export default function FlatMap() {
  const [users, setUsers] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      id: `user_${i}`,
      name: `User ${i + 1}`,
    })),
  );

  // 2. Define how ONE item should look
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        onPress={() => console.log('Clicked', item.name)}
      >
        <Text style={styles.cardText}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>User List</Text>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
  },
  cardPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
});
