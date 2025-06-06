import React, { useState, useEffect } from 'react';
import {
  View,Text,TextInput,StyleSheet,TouchableOpacity, ScrollView, Image, Alert,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const initialVisitors = [
  {
    name: 'Suresh Khanna', phone: '9876543210', email: 'suresh@example.com', address: '123 Main St', gender: 'Male', purpose: 'Meeting',
  },
  {
    name: 'Preeti Ahuja', phone: '9123456780', email: 'preeti@example.com', address: '456 Oak Avenue',gender: 'Female',purpose: 'Delivery',
  },
  {
    name: 'Arav Sharma',phone: '9012345678',email: 'arav@example.com',address: '789 Pine Road',gender: 'Male',purpose: 'Interview',
  },
  {
    name: 'Priya Patel',phone: '9087654321',email: 'priya@example.com',address: '321 Hilltop Dr',gender: 'Female',purpose: 'Visit',
  },
];

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [visitors, setVisitors] = useState(initialVisitors);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVisitors, setFilteredVisitors] = useState(initialVisitors);


  // Filter visitors on search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVisitors(visitors);
    } else {
      const filtered = visitors.filter((visitor) =>
        visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredVisitors(filtered);
    }
  }, [searchQuery, visitors]);

  const showVisitorDetails = (visitor) => {
    Alert.alert(
      'Visitor Details',
      `Name: ${visitor.name}
Phone: ${visitor.phone}
Email: ${visitor.email}
Address: ${visitor.address}
Gender: ${visitor.gender}
Purpose: ${visitor.purpose}`
    );
  };

  const removeVisitor = (nameToRemove) => {
    const updated = visitors.filter((visitor) => visitor.name !== nameToRemove);
    setVisitors(updated);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>

          <Image
          
          source={{ uri: 'https://i.imgur.com/1bX5QH6.png' }}
          style={styles.avatar}
          />
          </TouchableOpacity>
          <Text style={styles.greeting}>
            Hello, <Text style={{ fontWeight: '700' }}>Kapil</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')} >
          <Ionicons name="refresh" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9CA3AF" style={{ marginLeft: 12 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Visitor List */}
      <ScrollView style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Today</Text>

        {filteredVisitors.length > 0 ? (
          filteredVisitors.map((visitor, index) => (
            <View key={index} style={styles.visitorCard}>
              <Text style={styles.visitorName}>{visitor.name}</Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => removeVisitor(visitor.name)}
                >
                  <MaterialIcons name="cancel" size={20} color="#C4C4C4" />
                </TouchableOpacity>
                <TouchableOpacity
  style={[styles.iconButton, { backgroundColor: '#2196F3' }]}
  onPress={() => navigation.navigate('EditVisitorScreen', {
    visitor,
    updateVisitor: (updatedVisitor) => {
      setVisitors((prev) =>
        prev.map((v) => v.name === updatedVisitor.oldName ? updatedVisitor : v)
      );
    }
  })}
>
  <Ionicons name="create-outline" size={20} color="#fff" />
</TouchableOpacity>

                <TouchableOpacity
                  style={[styles.iconButton, { backgroundColor: '#4CAF50' }]}
                  onPress={() => showVisitorDetails(visitor)}
                >
                  <Ionicons name="call" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ color: '#ccc', textAlign: 'center', marginTop: 20 }}>
            No visitors found.
          </Text>
        )}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('VisitorFormScreen')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// styles remain the same (from your code)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E121B',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D74D3D',
    padding: 16,
    borderRadius: 12,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#1C1F2A',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  listContainer: {
    marginTop: 30,
    marginBottom: 100,
  },
  sectionTitle: {
    color: '#A1A1AA',
    fontSize: 16,
    marginBottom: 10,
  },
  visitorCard: {
    backgroundColor: '#2E313F',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  visitorName: {
    color: '#fff',
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#3F414C',
    padding: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  fab: {
    backgroundColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabIcon: {
    color: '#D74D3D',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
