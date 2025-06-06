import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={26} color="#D74D3D" />
      </TouchableOpacity>

      <Text style={styles.title}>Sign Up</Text>

      {/* First Name & Last Name */}
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 8 }]}
          placeholder="First name"
          placeholderTextColor="#9CA3AF"
          value={form.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Last name"
          placeholderTextColor="#9CA3AF"
          value={form.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
      </View>

      {/* Phone Number */}
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor="#9CA3AF"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(text) => handleChange('phone', text)}
      />

      {/* Email ID */}
      <TextInput
        style={styles.input}
        placeholder="Email ID"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => handleChange('email', text)}
      />

      {/* Address */}
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#9CA3AF"
        value={form.address}
        onChangeText={(text) => handleChange('address', text)}
      />

      {/* Create Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Create password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!passwordVisible}
          value={form.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#9CA3AF"
            style={styles.eyeIcon}
          />
        </Pressable>
      </View>

      {/* Confirm Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Confirm password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry={!confirmPasswordVisible}
          value={form.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
        />
        <Pressable onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
          <Ionicons
            name={confirmPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#9CA3AF"
            style={styles.eyeIcon}
          />
        </Pressable>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.loginLinkContainer}>
        <Text style={{ color: '#9CA3AF' }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}> Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0E121B',
    flexGrow: 1,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#D74D3D',
    fontWeight: '700',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1C1F2A',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2E313F',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#D74D3D',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginLink: {
    color: '#fff',
    fontWeight: '600',
  },
});
