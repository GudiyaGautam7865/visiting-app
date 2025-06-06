import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
  const navigation = useNavigation();

  // Animation refs
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeOutCircle = useRef(new Animated.Value(1)).current;
  const tipWidth = useRef(new Animated.Value(0)).current;
  const longWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate circle
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(fadeOutCircle, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(tipWidth, {
          toValue: 24,
          duration: 300,
          delay: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(longWidth, {
          toValue: 40,
          duration: 300,
          delay: 1400,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  }, []);

  const handlePress = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>

        <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
      </View>

      {/* Animated Success Icon */}
      <View style={styles.iconWrapper}>
        {/* Fading expanding background circle */}
        <Animated.View
          style={[
            styles.wrapper2,
            {
              transform: [{ scale: scaleAnim }],
              opacity: fadeOutCircle,
            },
          ]}
        />
        {/* Main circle */}
        <Animated.View
          style={[
            styles.wrapper,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        />
        {/* Checkmark tip */}
        <Animated.View
          style={[
            styles.tip,
            {
              width: tipWidth,
            },
          ]}
        />
        {/* Checkmark long */}
        <Animated.View
          style={[
            styles.long,
            {
              width: longWidth,
            },
          ]}
        />
      </View>

      <Text style={styles.title}>Successful</Text>
      <Text style={styles.subtitle}>OTP verification successful.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateNewPasswordScreen')}>
        <Text style={styles.buttonText}>Create new password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  arrowContainer: {
    alignSelf: 'flex-start',
    marginTop: 40,
    marginLeft: 20,
  },
  arrow: {
    fontSize: 24,
    color: 'white',
  },
  iconWrapper: {
    width: 120,
    height: 120,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'green',
  },
  wrapper2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'green',
    zIndex: -1,
  },
  tip: {
    position: 'absolute',
    height: 5,
    backgroundColor: '#c6f6c6',
    top: 65,
    left: 35,
    transform: [{ rotate: '45deg' }],
    borderRadius: 5,
  },
  long: {
    position: 'absolute',
    height: 5,
    backgroundColor: '#c6f6c6',
    top: 62,
    left: 45,
    transform: [{ rotate: '-45deg' }],
    borderRadius: 5,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#de5b48',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
