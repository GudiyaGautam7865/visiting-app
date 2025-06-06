import  { useEffect } from 'react';
import { Link } from 'expo-router';
import { View, Text,  StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // navigate after 3 seconds

    return () => clearTimeout(timer);
  },);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome tjho the App</Text>
       <Link href="Home" >g</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24 },
});
