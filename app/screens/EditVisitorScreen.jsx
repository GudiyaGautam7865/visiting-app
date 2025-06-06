import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function EditVisitorScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { visitor, updateVisitor } = route.params;

  const [name, setName] = useState(visitor.name);
  const [phone, setPhone] = useState(visitor.phone);
  const [email, setEmail] = useState(visitor.email);
  const [address, setAddress] = useState(visitor.address);
  const [gender, setGender] = useState(visitor.gender);
  const [purpose, setPurpose] = useState(visitor.purpose);

  const handleSave = () => {
    const updated = {
      oldName: visitor.name, // used for finding in array
      name, phone, email, address, gender, purpose,
    };
    updateVisitor(updated);  // call the function passed from dashboard
    navigation.goBack();     // return to dashboard
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Edit Visitor’s Detail</Text>

      <View style={styles.inputBox}>
        <Ionicons name="person" size={20} color="#e1504a" />
        <TextInput value={name} onChangeText={setName} placeholder="Name" placeholderTextColor="#aaa" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="call" size={20} color="#e1504a" />
        <TextInput value={phone} onChangeText={setPhone} placeholder="Phone" placeholderTextColor="#aaa" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <MaterialIcons name="email" size={20} color="#e1504a" />
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="#aaa" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="location" size={20} color="#e1504a" />
        <TextInput value={address} onChangeText={setAddress} placeholder="Address" placeholderTextColor="#aaa" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="male" size={20} color="#e1504a" />
        <TextInput value={gender} onChangeText={setGender} placeholder="Gender" placeholderTextColor="#aaa" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="document-text-outline" size={20} color="#e1504a" />
        <TextInput value={purpose} onChangeText={setPurpose} placeholder="Purpose" placeholderTextColor="#aaa" style={styles.input} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0E121B', padding: 20 },
  header: { fontSize: 22, color: '#fff', marginBottom: 30 },
  inputBox: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: '#555', padding: 12,
    marginBottom: 16, borderRadius: 10
  },
  input: {
    flex: 1, marginLeft: 10, color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginTop: 30,
  },
  cancelBtn: {
    backgroundColor: '#333', padding: 15, borderRadius: 10, flex: 1, marginRight: 10
  },
  cancelText: {
    textAlign: 'center', color: '#fff', fontWeight: '600'
  },
  saveBtn: {
    backgroundColor: '#e1504a', padding: 15, borderRadius: 10, flex: 1
  },
  saveText: {
    textAlign: 'center', color: '#fff', fontWeight: '600'
  }
});
