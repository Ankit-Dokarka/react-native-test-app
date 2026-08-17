import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  StyleSheet,
} from 'react-native';

export default function KeyboardExp() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') return;
    console.log('Sent:', message);
    setMessage('');
    Keyboard.dismiss(); // 👈 Hides the keyboard automatically after sending
  };

  return (
    // 👇 The magic wrapper
    <KeyboardAvoidingView
      style={styles.container}
      // iOS uses 'padding', Android uses 'height'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90} // Offset to account for the header bar
    >
      {/* Pressable area to dismiss keyboard when tapping outside the input */}
      <Pressable style={styles.chatArea} onPress={Keyboard.dismiss}>
        <Text style={styles.placeholder}>Chat messages go here...</Text>
      </Pressable>

      {/* The input bar pinned to the bottom */}
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <Pressable
          style={({ pressed }) => [
            styles.sendButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={sendMessage}
        >
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    color: '#999',
    fontSize: 16,
  },
  inputBar: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  sendText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
