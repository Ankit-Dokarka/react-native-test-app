import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function Notes() {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if (noteText.trim() === '') return;
    setNotes([noteText, ...notes]);
    setNoteText('');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>My Notes</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a note here..."
          value={noteText}
          onChangeText={setNoteText}
        />
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={addNote}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.scrollView}>
        {notes.map((note, index) => (
          <View key={index} style={styles.noteCard}>
            <Text style={styles.noteText}>{note}</Text>
          </View>
        ))}
      </ScrollView>
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginRight: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  noteCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#007AFF',
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
});
