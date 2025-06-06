import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const handleSubmit = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your registered email');
      return;
    }
    // You can handle your forgot password logic here
    Alert.alert('Success', `Password reset link sent to ${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Title Section */}
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>Enter your registered email below</Text>

      {/* Email Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="surajsingh@gmail.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('optScreen')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f111a',
    padding: 20,
  },
  backButton: {
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 40,
  },
  inputWrapper: {
    marginBottom: 40,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3a3d4c',
    backgroundColor: '#161821',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    color: '#fff',
  },
  button: {
    backgroundColor: '#e1504a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
