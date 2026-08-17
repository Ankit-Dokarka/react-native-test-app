import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { createMMKV } from 'react-native-mmkv';

// 1. Initialize the storage module using the v4 Nitro Modules API
const storage = createMMKV();

export default function LocalStorage() {
  // 2. Read the saved text synchronously right when the component loads
  const [note, setNote] = useState(storage.getString('userNote') || '');

  // 3. Save the text to storage every time it changes
  useEffect(() => {
    storage.set('userNote', note);
  }, [note]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Persistent Note</Text>
      <Text style={styles.subtitle}>
        Type below. Close the app and reopen it.
      </Text>

      <TextInput
        style={styles.input}
        multiline
        placeholder="Start typing..."
        value={note}
        onChangeText={setNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    fontSize: 16,
    textAlignVertical: 'top',
  },
});
