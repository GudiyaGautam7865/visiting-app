import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, SafeAreaView, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState('https://cdn3d.iconscout.com/3d/premium/thumb/male-avatar-6299535-5187871.png');
const navigation = useNavigation();
  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera access is required to take a profile photo.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
          <Ionicons name="create-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image source={{ uri: imageUri }} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIcon} onPress={openCamera}>
          <Ionicons name="camera" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>Gudiya Gautam</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>91-7845767896</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>Kapilkamat@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>12-4B, sector-2, lane-6, kuruli, Pune 411025</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5 name="key" size={18} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>Password reset</Text>
        </View>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Login')} >
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f111a',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  cameraIcon: {
    backgroundColor: '#e1504a',
    padding: 6,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    right: -5,
  },
  infoBox: {
    backgroundColor: 'transparent',
    padding: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  icon: {
    width: 28,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12,
    flex: 1,
    flexWrap: 'wrap',
  },
  logoutBtn: {
    backgroundColor: '#e1504a',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
