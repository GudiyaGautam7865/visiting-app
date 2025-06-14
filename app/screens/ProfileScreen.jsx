// import React, { useContext, useState } from 'react';
// import {
//   View, Text, StyleSheet, TouchableOpacity,
//   Image, SafeAreaView, Alert
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
// import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
// import { ProfileContext } from '../context/ProfileContext';

// export default function ProfileScreen() {
//   const { profile } = useContext(ProfileContext);
//   const [imageUri, setImageUri] = useState('https://cdn3d.iconscout.com/3d/premium/thumb/male-avatar-6299535-5187871.png');
//   const navigation = useNavigation();

//   const openCamera = async () => {
//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert('Permission Denied', 'Camera access is required to take a profile photo.');
//       return;
//     }

//     const result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImageUri(result.assets[0].uri);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="chevron-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Profile</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
//           <Ionicons name="create-outline" size={22} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.avatarContainer}>
//         <Image source={{ uri: imageUri }} style={styles.avatar} />
//         <TouchableOpacity style={styles.cameraIcon} onPress={openCamera}>
//           <Ionicons name="camera" size={16} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.infoBox}>
//         <View style={styles.infoRow}>
//           <Ionicons name="person" size={20} color="#e1504a" style={styles.icon} />
//           <Text style={styles.infoText}>{profile.name}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <Ionicons name="call" size={20} color="#e1504a" style={styles.icon} />
//           <Text style={styles.infoText}>{profile.phone}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="email" size={20} color="#e1504a" style={styles.icon} />
//           <Text style={styles.infoText}>{profile.email}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <Ionicons name="location" size={20} color="#e1504a" style={styles.icon} />
//           <Text style={styles.infoText}>{profile.address}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <FontAwesome5 name="key" size={18} color="#e1504a" style={styles.icon} />
//           <Text style={styles.infoText}>{profile.password}</Text>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.logoutText}>Log out</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#0f111a', paddingHorizontal: 20, paddingTop: 50 },
//   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
//   title: { fontSize: 22, color: '#fff', fontWeight: '600' },
//   avatarContainer: { alignSelf: 'center', marginBottom: 20, position: 'relative' },
//   avatar: { width: 90, height: 90, borderRadius: 45 },
//   cameraIcon: { backgroundColor: '#e1504a', padding: 6, borderRadius: 15, position: 'absolute', bottom: 0, right: -5 },
//   infoBox: { backgroundColor: 'transparent', padding: 10 },
//   infoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
//   icon: { width: 28 },
//   infoText: { fontSize: 16, color: '#fff', marginLeft: 12, flex: 1, flexWrap: 'wrap' },
//   logoutBtn: { backgroundColor: '#e1504a', paddingVertical: 14, borderRadius: 10, marginTop: 40, alignItems: 'center' },
//   logoutText: { color: '#fff', fontWeight: '600', fontSize: 16 },
// });

import React, { useContext, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Image, SafeAreaView, Alert
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ProfileContext } from '../context/ProfileContext';

export default function ProfileScreen() {
  // const { profile } = useContext(ProfileContext);
  const { profile } = useAuth();
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Ionicons name="create-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.label}>Name: {profile?.name}</Text>
      <Text style={styles.label}>Email: {profile?.email}</Text>
      <Text style={styles.label}>Password: {profile?.password}</Text>
    </View>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: imageUri }} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIcon} onPress={openCamera}>
          <Ionicons name="camera" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>{profile.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="call" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>{profile.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="email" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>{profile.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location" size={20} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>{profile.address}</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome5 name="key" size={18} color="#e1504a" style={styles.icon} />
          <Text style={styles.infoText}>{profile.password}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f111a', paddingHorizontal: 20, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 22, color: '#fff', fontWeight: '600' },
  avatarContainer: { alignSelf: 'center', marginBottom: 20, position: 'relative' },
  avatar: { width: 90, height: 90, borderRadius: 45 },
  cameraIcon: { backgroundColor: '#e1504a', padding: 6, borderRadius: 15, position: 'absolute', bottom: 0, right: -5 },
  infoBox: { backgroundColor: 'transparent', padding: 10 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  icon: { width: 28 },
  infoText: { fontSize: 16, color: '#fff', marginLeft: 12, flex: 1, flexWrap: 'wrap' },
  logoutBtn: { backgroundColor: '#e1504a', paddingVertical: 14, borderRadius: 10, marginTop: 40, alignItems: 'center' },
  logoutText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
