import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';

const EditModal = ({ modalVisible, onClose, user }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={user.profileImage} style={styles.profileImage} />
          </View>
        </View>

        <View style={styles.editSection}>


                  <View style={styles.editItem}>
            <Text style={styles.editItemTitle}>Profile Image</Text>
            <View style={styles.editItemContent}>
              <Text style={styles.editItemSubtitle}>Choose your profile image</Text>
              <TouchableOpacity style={styles.editButton}>
                <Image source={require('../assets/edit.png')} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.editItem}>
            <Text style={styles.editItemTitle}>Name</Text>
            <View style={styles.editItemContent}>
              <Text style={styles.editItemSubtitle}>{user.name}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Image source={require('../assets/edit.png')} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.editItem}>
            <Text style={styles.editItemTitle}>Email</Text>
            <View style={styles.editItemContent}>
              <Text style={styles.editItemSubtitle}>{user.email}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Image source={require('../assets/edit.png')} style={styles.editIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileContainer: {
    backgroundColor: '#607FF8',
    marginTop: 50,
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  profileImageContainer: {
    marginLeft: 100,
    marginTop: 40,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  editSection: {
    width: '80%',
  },
  editItem: {
    marginBottom: 20,
  },
  editItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editItemSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#607FF8',
    padding: 8,
    borderRadius: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default EditModal;
