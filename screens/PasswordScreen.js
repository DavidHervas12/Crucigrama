import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';

export default function PasswordScreen({ onCloseModal }) {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handleRecoverPassword = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    console.log('Recover password for:', email);
    
  };

  return (
    <Modal animationType="slide" transparent={true} onRequestClose={onCloseModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.emailText}>Enter your email<Text style={styles.requiredField}> *</Text></Text>
          <TextInput
            style={[styles.input, emailError ? styles.errorInput : null]}
            placeholder="email@gmail.com"
            value={email}
            onChangeText={handleEmailChange}
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.passwordButton} onPress={handleRecoverPassword}>
              <Text style={styles.buttonText}>Recover password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  emailText: {
    color: '#607FF8',
    marginVertical: 5,
    padding: 5,
  },
  requiredField: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#607FF8',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 25,
  },
  passwordButton: {
    backgroundColor: '#607FF8',
    borderRadius: 40,
    padding: 10,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 40,
    padding: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
