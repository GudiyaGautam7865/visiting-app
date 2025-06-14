// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Ionicons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

// export default function EditProfileScreen({ navigation }) {
//   const [profile, setProfile] = useState({
//     name: 'Gudiya Gautam',
//     phone: '91-7845767896',
//     email: 'Kapilkamat@gmail.com',
//     address: '12-4B, sector-2, lane-6, kuruli, Pune 411025',
//     password: 'Password reset',
//   });

//   const handleSave = () => {
//     navigation.navigate('Profile', { profile });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Edit Profile</Text>
//       <Image source={require('../../assets/images/favicon.png')} style={styles.avatar} />

//       <View style={styles.inputBox}>
//         <Ionicons name="person" size={20} color="white" />
//         <TextInput style={styles.input} value={profile.name} onChangeText={(text) => setProfile({ ...profile, name: text })} />
//       </View>

//       <View style={styles.inputBox}>
//         <Entypo name="phone" size={20} color="white" />
//         <TextInput style={styles.input} value={profile.phone} onChangeText={(text) => setProfile({ ...profile, phone: text })} keyboardType="phone-pad" />
//       </View>

//       <View style={styles.inputBox}>
//         <MaterialIcons name="email" size={20} color="white" />
//         <TextInput style={styles.input} value={profile.email} onChangeText={(text) => setProfile({ ...profile, email: text })} keyboardType="email-address" />
//       </View>

//       <View style={styles.inputBox}>
//         <Ionicons name="location" size={20} color="white" />
//         <TextInput style={styles.input} value={profile.address} onChangeText={(text) => setProfile({ ...profile, address: text })} />
//       </View>

//       <View style={styles.inputBox}>
//         <FontAwesome5 name="lock" size={20} color="white" />
//         <TextInput style={styles.input} value={profile.password} secureTextEntry />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.cancel}  onPress={() => navigation.goBack()}>
//           <Text style={styles.cancelText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.save} onPress={handleSave}>
//           <Text style={styles.saveText}  onPress={() => navigation.goBack()}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#0f111c', padding: 20 },
//   header: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
//   avatar: { width: 80, height: 80, borderRadius: 40, alignSelf: 'flex-end', marginBottom: 20 },
//   inputBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1c1f2e',
//     padding: 12,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   input: { color: 'white', marginLeft: 10, flex: 1 },
//   buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
//   cancel: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10 },
//   cancelText: { color: 'white' },
//   save: { backgroundColor: '#e05757', padding: 15, borderRadius: 10 },
//   saveText: { color: 'white', fontWeight: 'bold' },
// });



import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { ProfileContext } from '../context/ProfileContext';

export default function EditProfileScreen({ navigation }) {
  const { profile, setProfile } = useContext(ProfileContext);
  const [editedProfile, setEditedProfile] = useState(profile);
  
  const handleSave = () => {
    setProfile(editedProfile);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      <Image source={require('../../assets/images/favicon.png')} style={styles.avatar} />

      <View style={styles.inputBox}>
        <Ionicons name="person" size={20} color="white" />
        <TextInput style={styles.input} value={editedProfile.name} onChangeText={(text) => setEditedProfile({ ...editedProfile, name: text })} />
      </View>

      <View style={styles.inputBox}>
        <Entypo name="phone" size={20} color="white" />
        <TextInput style={styles.input} value={editedProfile.phone} onChangeText={(text) => setEditedProfile({ ...editedProfile, phone: text })} keyboardType="phone-pad" />
      </View>

      <View style={styles.inputBox}>
        <MaterialIcons name="email" size={20} color="white" />
        <TextInput style={styles.input} value={editedProfile.email} onChangeText={(text) => setEditedProfile({ ...editedProfile, email: text })} keyboardType="email-address" />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="location" size={20} color="white" />
        <TextInput style={styles.input} value={editedProfile.address} onChangeText={(text) => setEditedProfile({ ...editedProfile, address: text })} />
      </View>

      <View style={styles.inputBox}>
        <FontAwesome5 name="lock" size={20} color="white" />
        <TextInput style={styles.input} value={editedProfile.password} secureTextEntry />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f111c', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, alignSelf: 'flex-end', marginBottom: 20 },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1f2e',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  input: { color: 'white', marginLeft: 10, flex: 1 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  cancel: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 10 },
  cancelText: { color: 'white' },
  save: { backgroundColor: '#e05757', padding: 15, borderRadius: 10 },
  saveText: { color: 'white', fontWeight: 'bold' },
});
