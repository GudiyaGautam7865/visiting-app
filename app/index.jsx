import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import DashboardScreen from './DashboardScreen';
import VisitorFormScreen from './VisitorFormScreen';
import ProfileScreen from './screens/ProfileScreen';
import HistoryScreen from './screens/HistoryScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import EditVisitorScreen from './screens/EditVisitorScreen';
import OtpScreen from './screens/OtpScreen';
import SuccessScreen from './screens/SuccessScreen';
import CreateNewPasswordScreen from './screens/CreateNewPasswordScreen';

import { ProfileProvider } from './context/ProfileContext'; // ✅ Import the provider

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProfileProvider> {/* ✅ Wrap your app here */}
    
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="VisitorFormScreen" component={VisitorFormScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="optScreen" component={OtpScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
          <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} />
          <Stack.Screen name="EditVisitorScreen" component={EditVisitorScreen} />
        </Stack.Navigator>

    </ProfileProvider>
  );
}
