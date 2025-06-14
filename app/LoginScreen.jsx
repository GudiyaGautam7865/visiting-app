// import { useState } from 'react';
// import {
//   View, Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Pressable,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function LoginScreen() {
//   const navigation = useNavigation();
  
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const validUser = {
//       email: 'test@.com',
//       password: 'Password123',
//     };

//     if (email === validUser.email && password === validUser.password) {
//       navigation.navigate('Dashboard');
//     } else {
//       Alert.alert('Login Failed', 'Invalid email or password');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Ionicons name="chevron-back" size={26} color="#D74D3D" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Log In</Text>

//       {/* Email Input */}
//       <Text style={styles.label}>Email address</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         placeholderTextColor="#9CA3AF"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       {/* Password Input */}
//       <Text style={styles.label}>Password</Text>
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={[styles.input, { flex: 1 }]}
//           placeholder="Enter your password"
//           placeholderTextColor="#9CA3AF"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={!passwordVisible}
//         />
//         <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
//           <Ionicons
//             name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
//             size={22}
//             color="#9CA3AF"
//             style={styles.eyeIcon}
//           />
//         </Pressable>
//       </View>

//       {/* Remember Me & Forgot Password */}
//       <View style={styles.optionsContainer}>
//         <View style={styles.rememberContainer}>
//           <Text style={styles.rememberText}>Remember me</Text>
//         </View>

//         <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen')}>
//           <Text style={styles.forgotText}>Forgot password?</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Login Button */}
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginText}>Log in</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0E121B',
//     padding: 20,
//   },
//   backButton: {
//     marginTop: 40,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     color: '#D74D3D',
//     fontWeight: '700',
//     marginBottom: 30,
//   },
//   label: {
//     color: '#fff',
//     marginBottom: 6,
//     fontSize: 14,
//   },
//   input: {
//     backgroundColor: '#1C1F2A',
//     borderRadius: 8,
//     padding: 12,
//     color: '#fff',
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#2E313F',
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   eyeIcon: {
//     marginLeft: 10,
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//   },
//   rememberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rememberText: {
//     color: '#9CA3AF',
//     fontSize: 13,
//   },
//   forgotText: {
//     color: '#9CA3AF',
//     fontSize: 13,
//   },
//   loginButton: {
//     backgroundColor: '#D74D3D',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   loginText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });






import { useState } from 'react';
import {
  View, Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Button, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../app/context/AuthContext';
export default function LoginScreen() {
  const navigation = useNavigation();
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
 

  const handleLogin = () => {
    const result = login(email, password);
    if (result.success) {
      navigation.replace('DashboardScreen');
    } else {
      Alert.alert('Login Failed', result.message);
    }
  const handleLogin = () => {
    const validUser = {
      email: 'test@.com',
      password: 'Password123',
    };

    if (email === validUser.email && password === validUser.password) {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };}

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={26} color="#D74D3D" />
      </TouchableOpacity>

      <Text style={styles.title}>Log In</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
  <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Enter your password"
          placeholderTextColor="#9CA3AF"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
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

      {/* Remember Me & Forgot Password */}
      <View style={styles.optionsContainer}>
        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen')}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E121B',
    padding: 20,
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
  label: {
    color: '#fff',
    marginBottom: 6,
    fontSize: 14,
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
  },
  eyeIcon: {
    marginLeft: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#9CA3AF',
    fontSize: 13,
  },
  forgotText: {
    color: '#9CA3AF',
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: '#D74D3D',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});






