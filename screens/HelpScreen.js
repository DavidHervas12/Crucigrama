import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function HelpScreen({ onCloseModal }) {
  const navigation = useNavigation();
  const route = useRoute();
  const isModal = route.params?.isModal || false;

  useEffect(() => {
    if (isModal) {
      navigation.setOptions({
        gestureEnabled: true,
        cardOverlayEnabled: true,
      });
    }
  }, [isModal, navigation]);

  const goBack = () => {
    if (isModal) {
      navigation.goBack();
    } else {
      // Handle regular navigation (not modal)
    }
  };

  const goToContactScreen = () => {
    navigation.navigate('ContactScreen');
  };

  const goToQuestionsScreen = () => {
    navigation.navigate('QuestionsScreen');
  };

  const goToVersionScreen = () => {
    navigation.navigate('VersionScreen');
  };

  const handleClose = () => {

    if (onCloseModal) {
      onCloseModal();
    }
  };

  return (
    <Modal
      visible={true}  
      animationType="slide"
      transparent={true}
      onRequestClose={goBack}
    >
      <View style={styles.container}>
        <Text style={styles.textHelp}>Help</Text>
        <View style={styles.part2}>
          <TouchableOpacity onPress={goToContactScreen}>
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToQuestionsScreen}>
            <Text style={styles.buttonText}>Frequently questions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToVersionScreen}>
            <Text style={styles.buttonText}>Version</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#ffffff',
  },
  textHelp: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'top',
    textAlign: 'center',
  },
  part2: {
    padding: 20,
    alignItems: 'center', // Centra los botones horizontalmente
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  closeButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
