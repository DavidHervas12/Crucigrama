import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import {
  useFonts,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";

const AddVideoModal = ({
  modalVisible,
  onClose,
  video,
  availableLists,
  onAddToExistingList,
  onCreateNewList,
}) => {
  const [fontsLoaded] = useFonts({
    RobotoMono: RobotoMono_400Regular,
  });
  const [newListName, setNewListName] = useState("");
  const [modalVisibleNameInput, setModalVisibleNameInput] = useState(false);

  const handleCreateNewList = () => {
    setModalVisibleNameInput(true);
  };

  const handleConfirmCreateNewList = () => {
    onCreateNewList(newListName);
    setModalVisibleNameInput(false);
    setNewListName(""); // Limpiar el valor del TextInput
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Botón para crear una nueva lista */}
          <TouchableOpacity
            style={styles.createNewListButton}
            onPress={handleCreateNewList}
          >
            <Text style={styles.createNewListButtonText}>
              Crear Nueva Lista
            </Text>
          </TouchableOpacity>
          {/* FlatList de elementos disponibles */}
          <FlatList
            data={availableLists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalListItem}
                onPress={() => onAddToExistingList(item.id, video.id)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          {/* Botón de Cerrar */}
          <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
          {/* Modal para introducir el nombre de la nueva lista */}
          <Modal
            visible={modalVisibleNameInput}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.popupContainer}>
              <View style={styles.popupContent}>
                <Text style={styles.popupTitle}>Nuevo Nombre de Lista</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setNewListName}
                  value={newListName}
                  placeholder="Nombre de la Lista"
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setModalVisibleNameInput(false)}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={handleConfirmCreateNewList}
                  >
                    <Text style={styles.buttonText}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: "100%", // Ancho del 100%
    height: "100%", // Altura del 100%
    fontFamily: "RobotoMono",
  },
  modalListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    fontFamily: "RobotoMono",
  },
  createNewListButton: {
    padding: 10,
    backgroundColor: "#607FF8",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    fontFamily: "RobotoMono",
  },
  createNewListButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "RobotoMono",
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
    fontFamily: "RobotoMono",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "RobotoMono",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: "RobotoMono",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "RobotoMono",
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
    fontFamily: "RobotoMono",
  },
  confirmButton: {
    backgroundColor: "#607FF8",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
    fontFamily: "RobotoMono",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "RobotoMono",
  },
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "RobotoMono",
  },
});

export default AddVideoModal;
