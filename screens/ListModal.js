import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal } from 'react-native';

const ListModal = ({ visible, onClose, selectedList }) => {
const renderModalItem = ({ item }) => (
  <View style={styles.modalItemContainer}>
    <Text style={styles.listName}>{item.text}</Text>
    {item.images.map((image, index) => (
      <View key={index} style={styles.itemRow}>
        <Image source={image} style={styles.modalItemImage} />
        <Text style={styles.modalItemText}>{`Item ${index + 1}`}</Text>
      </View>
    ))}
  </View>
);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <FlatList
          data={selectedList ? [selectedList] : []}
          keyExtractor={(item) => item.id}
          renderItem={renderModalItem}
          contentContainerStyle={styles.flatListContainer}
        />
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
    flatListContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  modalItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    width: 350,
    height: 620,
  },
itemRow: {
  flexDirection: 'row', 
  alignItems: 'center',
  marginBottom: 10,
},

  modalItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  modalItemText: {
    fontFamily: 'RobotoMono',
    fontSize: 16,
    marginRight: 180,
  },
  closeButton: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  closeButtonText: {
    fontFamily: 'RobotoMono',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
    listName: {
    fontFamily: 'RobotoMono',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ListModal;
