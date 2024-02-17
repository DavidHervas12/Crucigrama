import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import HelpScreen from "./HelpScreen";
import ScreensContext from "./ScreenContext";
import { CommonActions } from '@react-navigation/native';
import MainNavigator from "./MainNavigator";


// cambiar texto en invitado
//
const ConfigScreen = ({ mainNavigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const { setUser, setIsLoggedIn } = useContext(ScreensContext);
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "English" ? "Spanish" : "English"
    );
  };

  const handleHelp = () => {
    setIsHelpModalVisible(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    mainNavigation.navigate('Login');
  };
  

  const closeHelpModal = () => {
    setIsHelpModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          thumbColor={darkMode ? "#607FF8" : "#ffffff"}
          trackColor={{ false: "#d3d3d3", true: "#393e46" }}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Language: {language}</Text>
        <Switch
          value={language === "Spanish"}
          onValueChange={toggleLanguage}
          thumbColor={"#607FF8"}
          trackColor={{ false: "#d3d3d3", true: "#393e46" }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleHelp}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>


      {/* Modal para la pantalla de ayuda */}
      <Modal
        visible={isHelpModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeHelpModal}
      >
        <HelpScreen onCloseModal={closeHelpModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#607FF8",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
  },
});

export default ConfigScreen;
