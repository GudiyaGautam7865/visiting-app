import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, StyleSheet, Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const VisitorFormScreen = ({ navigation, route }) => {
  // const { setVisitors, visitors } = route.params;
const [selectedIdProof, setSelectedIdProof] = useState('');
const [aadharNumber, setAadharNumber] = useState('');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [purpose, setPurpose] = useState('');
  const [description, setDescription] = useState('');
  const [whomToMeet, setWhomToMeet] = useState('');
  const [idProof, setIdProof] = useState('');
  const [reference, setReference] = useState('');
  const [remark, setRemark] = useState('');
  const [photo, setPhoto] = useState(null);

  const pickPhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      alert("Camera permission is required.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const saveVisitor = () => {
    if (!name || !phone) {
      alert("Name and phone are required.");
      return;
    }

    const newVisitor = {
      name,
      phone,
      email,
      address,
      gender,
      purpose,
      description,
      whomToMeet,
      idProof,
      reference,
      remark,
      photo
    };

    // setVisitors([...visitors, newVisitor]);
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Visitors detail</Text>

      <InputWithIcon icon="person" placeholder="Visitor's Name" value={name} onChangeText={setName} />
      <InputWithIcon icon="call" placeholder="Phone number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <InputWithIcon icon="mail" placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <InputWithIcon icon="location" placeholder="Address" value={address} onChangeText={setAddress} />

      <Dropdown label="Gender" selectedValue={gender} onValueChange={setGender} items={['Male', 'Female', 'Other']} icon="transgender" />
      <Dropdown label="Purpose" selectedValue={purpose} onValueChange={setPurpose} items={['Meeting', 'Delivery', 'Other']} icon="target" />

      <InputWithIcon icon="subject" placeholder="Description" multiline value={description} onChangeText={setDescription} />
      <InputWithIcon icon="group" placeholder="Whom to meet" value={whomToMeet} onChangeText={setWhomToMeet} />
{/* 
      <Dropdown label="ID proof (optional)" selectedValue={idProof} onValueChange={setIdProof} items={['Aadhar', 'PAN', 'License']} icon="badge" /> */}
      <Text style={{ color: '#fff', marginBottom: 8, fontWeight: '500' }}>Select ID Proof</Text>

<View style={styles.checkboxContainer}>
  <TouchableOpacity
    style={[
      styles.checkboxItem,
      selectedIdProof === 'PAN' &&     styles.selectedItem,
    ]}
    onPress={() => setSelectedIdProof('PAN')}
    >
      <Text style={styles.checkboxLabel}>Pan card</Text>
       {selectedIdProof === 'PAN' && (
       <TextInput
        style={styles.inputInside}
        placeholder="Enter your adhar number"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        value={aadharNumber}
        onChangeText={setAadharNumber}
      />
       )}
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.checkboxItem,
      selectedIdProof === 'Aadhar' && styles.selectedItem,
    ]}
    onPress={() => setSelectedIdProof('Aadhar')}
  >
    <Text style={styles.checkboxLabel}>Adhar card</Text>
    {selectedIdProof === 'Aadhar' && (
      <TextInput
        style={styles.inputInside}
        placeholder="Enter your adhar number"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        value={aadharNumber}
        onChangeText={setAadharNumber}
      />
    )}
  </TouchableOpacity>

  <TouchableOpacity
    style={[
      styles.checkboxItem,
      selectedIdProof === 'Others' && styles.selectedItem,
    ]}
    onPress={() => setSelectedIdProof('Others')}
  >
    <Text style={styles.checkboxLabel}>Others</Text>
  </TouchableOpacity>
</View>

      <Dropdown label="Reference by (optional)" selectedValue={reference} onValueChange={setReference} items={['Staff', 'Friend', 'None']} icon="qr-code" />

      <View style={styles.row}>
        <TouchableOpacity style={styles.photoBtn} onPress={pickPhoto}>
          <FontAwesome5 name="camera" size={16} color="#fff" />
          <Text style={styles.photoText}> Photo</Text>
        </TouchableOpacity>

        <View style={styles.remarkBox}>
          <MaterialIcons name="edit" size={16} color="#fff" />
          <TextInput placeholder="Remark (optional)" placeholderTextColor="#aaa" style={styles.remarkInput} value={remark} onChangeText={setRemark} />
        </View>
      </View>

      {photo && <Image source={{ uri: photo }} style={{ height: 150, borderRadius: 10, marginBottom: 10 }} />}

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn} onPress={saveVisitor}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const InputWithIcon = ({ icon, placeholder, ...props }) => (
  <View style={styles.inputBox}>
    <Ionicons name={icon} size={18} color="#e1504a" style={styles.icon} />
    <TextInput placeholder={placeholder} placeholderTextColor="#ccc" style={styles.input} {...props} />
  </View>
);

const Dropdown = ({ label, selectedValue, onValueChange, items, icon }) => (
  <View style={styles.inputBox}>
    <Ionicons name={icon} size={18} color="#e1504a" style={styles.icon} />
    <Picker selectedValue={selectedValue} onValueChange={onValueChange} style={styles.picker} dropdownIconColor="#fff">
      <Picker.Item label={label} value="" color="#999" />
      {items.map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
    </Picker>
  </View>
);

// Styles remain the same as your current code








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d111a',
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 30,
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginVertical: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c2230',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 12,
  },
  picker: {
    flex: 1,
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  photoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e1504a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
  },
  photoText: {
    color: '#fff',
    fontWeight: '500',
  },
  remarkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c2230',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
  remarkInput: {
    flex: 1,
    color: '#fff',
    paddingVertical: 10,
    marginLeft: 6,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#1c2230',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkboxContainer: {
  backgroundColor: '#1c2230',
  padding: 12,
  borderRadius: 10,
  marginBottom: 12,
},
checkboxItem: {
  padding: 12,
  borderRadius: 8,
  marginBottom: 8,
  backgroundColor: '#1c2230',
  borderWidth: 1,
  borderColor: '#333',
},
selectedItem: {
  backgroundColor: '#fdecea',
  borderColor: '#e1504a',
},
checkboxLabel: {
  color: '#fff',
  fontSize: 15,
  fontWeight: '500',
},
inputInside: {
  marginTop: 8,
  backgroundColor: '#fff',
  color: '#000',
  padding: 10,
  borderRadius: 6,
  fontSize: 14,
},

  cancelText: {
    color: '#fff',
    fontWeight: '500',
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#e1504a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default VisitorFormScreen;  