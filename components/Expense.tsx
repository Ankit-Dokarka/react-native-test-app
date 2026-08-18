import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { MaterialDesignIcons } from '@react-native-vector-icons/material-design-icons/static';
import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

const STORAGE_KEY = 'expenses';

const categories: {
  id: string;
  name: string;
  icon: React.ComponentProps<typeof MaterialDesignIcons>['name'];
}[] = [
  {
    id: 'food',
    name: 'Food',
    icon: 'food',
  },
  {
    id: 'transport',
    name: 'Transport',
    icon: 'car',
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: 'shopping',
  },
  {
    id: 'other',
    name: 'Other',
    icon: 'dots-horizontal',
  },
];

type ExpenseItem = {
  id: string;
  amount: number;
  description: string;
  category: string;
};

export default function Expense() {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('food');

  useEffect(() => {
    const savedExpenses = storage.getString(STORAGE_KEY);

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  useEffect(() => {
    storage.set(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const totalExpense = expenses.reduce((total, item) => total + item.amount, 0);

  const addExpense = () => {
    if (!amount || !description) {
      return;
    }

    const newExpense: ExpenseItem = {
      id: Date.now().toString(),
      amount: Number(amount),
      description: description,
      category: selectedCategory,
    };

    setExpenses(currentExpenses => [newExpense, ...currentExpenses]);

    setAmount('');
    setDescription('');
    setSelectedCategory('food');

    Keyboard.dismiss();
    setShowForm(false);
  };

  const deleteExpense = (id: string) => {
    setExpenses(currentExpenses =>
      currentExpenses.filter(item => item.id !== id),
    );
  };

  const getCategoryIcon = (category: string) => {
    if (category === 'food') {
      return 'food';
    }

    if (category === 'transport') {
      return 'car';
    }

    if (category === 'shopping') {
      return 'shopping';
    }

    return 'dots-horizontal';
  };

  const renderExpense = ({ item }: { item: ExpenseItem }) => {
    return (
      <View style={styles.expenseItem}>
        <View style={styles.expenseItemLeft}>
          <View style={styles.categoryIcon}>
            <MaterialDesignIcons
              name={getCategoryIcon(item.category)}
              size={26}
              color="#3F6B3D"
            />
          </View>

          <View>
            <Text style={styles.expenseDescription}>{item.description}</Text>

            <Text style={styles.expenseCategory}>{item.category}</Text>
          </View>
        </View>

        <View style={styles.expenseItemRight}>
          <Text style={styles.expenseAmount}>₹{item.amount}</Text>

          <Pressable onPress={() => deleteExpense(item.id)} hitSlop={10}>
            <MaterialDesignIcons
              name="delete-outline"
              size={22}
              color="#D9534F"
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'android' ? 'height' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headingView}>
          <Text style={styles.headingText}>My Expenses</Text>

          <Pressable>
            <MaterialDesignIcons
              name="dots-vertical"
              size={24}
              color="#171717"
            />
          </Pressable>
        </View>

        <View style={styles.totalCard}>
          <View>
            <Text style={styles.totalLabel}>Total Expenses</Text>

            <Text style={styles.totalAmount}>₹{totalExpense}</Text>
          </View>

          <View style={styles.walletContainer}>
            <MaterialDesignIcons
              name="wallet-outline"
              size={48}
              color="#3F6B3D"
            />
          </View>
        </View>

        <Pressable onPress={() => setShowForm(current => !current)}>
          {({ pressed }) => (
            <View
              style={[styles.addButton, pressed && styles.addButtonPressed]}
            >
              <MaterialDesignIcons
                name={showForm ? 'close' : 'plus'}
                size={22}
                color="#FFFFFF"
              />

              <Text style={styles.addButtonText}>
                {showForm ? 'Cancel' : 'Add Expense'}
              </Text>
            </View>
          )}
        </Pressable>

        {showForm && (
          <View style={styles.form}>
            <Text style={styles.inputLabel}>Amount</Text>

            <TextInput
              value={amount}
              onChangeText={setAmount}
              placeholder="Enter amount"
              placeholderTextColor="#A3A3A3"
              keyboardType="numeric"
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Description</Text>

            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="What did you spend on?"
              placeholderTextColor="#A3A3A3"
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Category</Text>

            <View style={styles.categoryRow}>
              {categories.map(category => (
                <Pressable
                  key={category.id}
                  onPress={() => setSelectedCategory(category.id)}
                >
                  {({ pressed }) => (
                    <View
                      style={[
                        styles.categoryButton,

                        selectedCategory === category.id &&
                          styles.categoryButtonSelected,

                        pressed && styles.categoryButtonPressed,
                      ]}
                    >
                      <MaterialDesignIcons
                        name={category.icon}
                        size={22}
                        color={
                          selectedCategory === category.id
                            ? '#FFFFFF'
                            : '#171717'
                        }
                      />

                      <Text
                        style={[
                          styles.categoryText,

                          selectedCategory === category.id &&
                            styles.categoryTextSelected,
                        ]}
                      >
                        {category.name}
                      </Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </View>

            <Pressable onPress={addExpense}>
              {({ pressed }) => (
                <View
                  style={[
                    styles.saveButton,
                    pressed && styles.saveButtonPressed,
                  ]}
                >
                  <MaterialDesignIcons name="check" size={22} color="#FFFFFF" />

                  <Text style={styles.saveButtonText}>Save Expense</Text>
                </View>
              )}
            </Pressable>
          </View>
        )}

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Recent Expenses</Text>

          {expenses.length === 0 ? (
            <View style={styles.emptyState}>
              <MaterialDesignIcons
                name="receipt-text-outline"
                size={50}
                color="#A3A3A3"
              />

              <Text style={styles.emptyTitle}>No expenses yet</Text>

              <Text style={styles.emptyText}>
                Add your first expense to get started.
              </Text>
            </View>
          ) : (
            <FlatList
              data={expenses}
              renderItem={renderExpense}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F7F5',
  },

  scrollContent: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },

  headingView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#171717',
  },

  totalCard: {
    width: '90%',
    padding: 20,
    borderRadius: 14,
    backgroundColor: '#E8F0E6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  totalLabel: {
    fontSize: 16,
    color: '#737373',
    marginBottom: 6,
  },

  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#171717',
  },

  walletContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButton: {
    width: 200,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#5B8C5A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  addButtonPressed: {
    opacity: 0.7,
    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  form: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginTop: 18,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
    marginBottom: 7,
    marginTop: 10,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingHorizontal: 14,
    color: '#171717',
    backgroundColor: '#FFFFFF',
  },

  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 5,
  },

  categoryButton: {
    minWidth: 90,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F7F7F5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  categoryButtonSelected: {
    backgroundColor: '#5B8C5A',
  },

  categoryButtonPressed: {
    opacity: 0.7,
  },

  categoryText: {
    fontSize: 12,
    color: '#171717',
  },

  categoryTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  saveButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3F6B3D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },

  saveButtonPressed: {
    opacity: 0.7,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  listContainer: {
    width: '90%',
    marginTop: 25,
  },

  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#171717',
    marginBottom: 12,
  },

  expenseItem: {
    width: '100%',
    minHeight: 75,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  expenseItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  categoryIcon: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#E8F0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  expenseDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171717',
  },

  expenseCategory: {
    fontSize: 13,
    color: '#737373',
    marginTop: 3,
    textTransform: 'capitalize',
  },

  expenseItemRight: {
    alignItems: 'flex-end',
    gap: 6,
  },

  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#171717',
  },

  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 30,
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#171717',
    marginTop: 10,
  },

  emptyText: {
    fontSize: 14,
    color: '#737373',
    marginTop: 5,
    textAlign: 'center',
  },
});
