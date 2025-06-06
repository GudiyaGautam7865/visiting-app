import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to next input
      if (index < 3) inputRefs.current[index + 1].focus();
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const resendOtp = () => {
    setTimer(60);
    setOtp(['', '', '', '']);
  };

//   const submitOtp = () => {
//     alert('Submitted OTP: ' + otp.join(''));
//   };

// Inside component
const navigation = useNavigation();

const submitOtp = () => {
  // Normally you'd validate the OTP here...
  navigation.navigate('SuccessScreen');
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OPT</Text>
      <Text style={styles.subText}>Enter OTP sent on your registered email ID</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <Text style={styles.timerText}>OTP expires in <Text style={{ fontStyle: 'italic' }}>{timer} sec</Text></Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.sendAgainButton} onPress={resendOtp}>
          <Text style={styles.sendAgainText}>Send again</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('SuccessScreen')}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  subText: {
    color: '#b0b0b0',
    fontSize: 14,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  otpInput: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  timerText: {
    color: '#b0b0b0',
    fontSize: 13,
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  sendAgainButton: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  sendAgainText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#d9534f',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  submitText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
