import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { actualizarUsuario } from "../services/services";
import ScreensContext from "./ScreenContext";

export default function ModifyScreen({ onCloseModal, isVisible }) {
  const { user } = useContext(ScreensContext); // Accede al contexto
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(null);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const defaultImage = require("../assets/UserIcon.png");

  useEffect(() => {
    chargeUserData();
    console.log(user);
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please grant permission to access the media library."
        );
      }
    })();
  }, []);

  const chargeUserData = () => {
    setUsername(user.username);
    setEmail(user.email);
    //TODO setImage() hacer lo de base 64
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      console.log("Image selection cancelled");
    }
  };

  const handleUpdateUser = async () => {
    if (!username) {
      setUsernameError("Username is required.");
      return;
    } else {
      setUsernameError("");
    }

    if (!email) {
      setEmailError("Email is required.");
      return;
    } else {
      setEmailError("");
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    const updatedData = {
      id: user.id,
      username: username,
      password: user.password,
      email: email,
      profilePicture: image ? image : "defaultProfilePicture",
    };
    console.log(updatedData);
    try {
      await actualizarUsuario(updatedData); // Usa el id del usuario del contexto
      Alert.alert(
        "Account Updated",
        "Your account has been updated successfully!",
        [
          {
            text: "OK",
            onPress: () => onCloseModal(),
          },
        ]
      );
      console.log("Account updated successfully");
    } catch (error) {
      console.error("Error during account update:", error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCloseModal}
    >
      <View style={styles.container}>
        <View style={styles.part1}></View>
        <View style={styles.part2}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={image ? { uri: image } : defaultImage}
              style={{ width: 110, height: 110 }}
            />
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
              <Feather name="plus" size={35} color="#607FF8" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userText}>
            Enter your username<Text style={styles.requiredField}> *</Text>
          </Text>
          <TextInput
            style={[styles.input, usernameError ? styles.errorInput : null]}
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setUsernameError("");
            }}
          />
          {usernameError ? (
            <Text style={styles.errorText}>{usernameError}</Text>
          ) : null}
          <Text style={styles.emailText}>
            Enter your email<Text style={styles.requiredField}> *</Text>
          </Text>
          <TextInput
            style={[styles.input, emailError ? styles.errorInput : null]}
            placeholder="email@gmail.com"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
            }}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.accountButton}
              onPress={handleUpdateUser}
            >
              <Text style={styles.buttonText}>Update Account</Text>
            </TouchableOpacity>
          </View>
          {/* Nuevo botón para cerrar la pantalla modal */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#ffffff",
  },
  part1: {
    flex: 3,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 60,
  },
  part2: {
    justifyContent: "center",
    marginVertical: 10,
    padding: 35,
  },
  emailText: {
    color: "#607FF8",
    marginVertical: 5,
    padding: 5,
  },
  userText: {
    color: "#607FF8",
    marginVertical: 5,
    padding: 5,
  },
  requiredField: {
    color: "red",
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#607FF8",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#607FF8",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 40,
  },
  accountButton: {
    backgroundColor: "#607FF8",
    borderRadius: 40,
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#E74C3C",
    borderRadius: 40,
    padding: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
  },
  errorInput: {
    borderColor: "red",
  },
});
