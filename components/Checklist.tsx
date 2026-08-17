import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Item = {
  id: number;
  itemName: string;
  isBought: boolean;
};
export default function Checklist() {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => {
    if (itemName.trim() === '') {
      return;
    }
    const newItem = {
      id: Date.now(),
      itemName: itemName.trim(),
      isBought: false,
    };
    setItems([newItem, ...items]);
    setItemName('');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TextInput
          value={itemName}
          style={styles.input}
          onChangeText={Text => setItemName(Text)}
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </Pressable>
      </View>
      <ScrollView>
        {items.map(item => (
          <View key={item.id} style={styles.items}>
            <Text>{item.itemName}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    gap: 15,
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#424242',
    borderRadius: 8,
    backgroundColor: 'white',
    fontSize: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    gap: 10,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderColor: '#424242',
    borderRadius: 8,
    padding: 20,
  },
});
