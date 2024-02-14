import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";
import ModifyScreen from "./ModifyScreen";
import ScreensContext from "./ScreenContext";

const ProfileScreen = () => {
  const { user, isLoggedIn } = useContext(ScreensContext); // Accede al contexto
  const [fontsLoaded] = useFonts({
    RobotoMono: RobotoMono_400Regular,
  });

  const [isModifyScreenVisible, setIsModifyScreenVisible] = useState(false);

  const openModifyScreen = () => {
    setIsModifyScreenVisible(true);
  };

  const closeModifyScreen = () => {
    setIsModifyScreenVisible(false);
  };

  if (!fontsLoaded) {
    return null;
  }

  const listsData = [
    { id: "1", name: "Lista 1", image: require("../assets/miniatura1.jpg") },
    { id: "2", name: "Lista 2", image: require("../assets/miniatura2.jpg") },
    { id: "3", name: "Lista 3", image: require("../assets/miniatura3.jpg") },
    { id: "4", name: "Lista 4", image: require("../assets/miniatura2.jpg") },
  ];

  const listsData2 = [
    { id: "1", name: "Lista 1", image: require("../assets/miniatura1.jpg") },
    { id: "2", name: "Lista 2", image: require("../assets/miniatura2.jpg") },
    { id: "3", name: "Lista 3", image: require("../assets/miniatura3.jpg") },
    { id: "4", name: "Lista 4", image: require("../assets/miniatura2.jpg") },
  ];

  return isLoggedIn ? (
    <View style={styles.container}>
      <Image
        source={user.profileImage || require("../assets/UserIcon.png")}
        style={styles.profileImage}
      />
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
        <Text style={styles.sectionTitle}>Lists</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={listsData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.listItemContainer}>
                <Image source={item.image} style={styles.listImage} />
                <Text style={styles.listName}>{item.name}</Text>
              </View>
            )}
          />
        </View>

        <Text style={styles.sectionTitle}>Saved Lists</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={listsData2}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.listItemContainer}>
                <Image source={item.image} style={styles.listImage} />
                <Text style={styles.listName}>{item.name}</Text>
              </View>
            )}
          />
        </View> 

        <TouchableOpacity onPress={openModifyScreen} style={styles.editButton}>
          <Image
            source={require("../assets/edit.png")}
            style={styles.editIcon}
          />
        </TouchableOpacity>

        {isModifyScreenVisible && (
          <ModifyScreen
            isVisible={isModifyScreenVisible}
            onCloseModal={closeModifyScreen}
          />
        )}
      </View>
    </View>
  ) : (<View style={styles.container}>
    <Text>You need to be logged in to access this screen</Text>
  </View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 20,
    marginTop: 50,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userInfoContainer: {
    marginLeft: 20,
    justifyContent: "center",
  },
  userName: {
    fontFamily: "RobotoMono",
    fontSize: 18,
    marginBottom: 5,
  },
  userEmail: {
    fontFamily: "RobotoMono",
    fontSize: 12,
  },
  sectionTitle: {
    fontFamily: "RobotoMono",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
  flatListContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -100,
    marginRight: 20,
  },
  listItemContainer: {
    alignItems: "center",
    marginRight: 20,
  },
  listImage: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  listName: {
    fontFamily: "RobotoMono",
    fontSize: 14,
  },
  editButton: {
    position: "absolute",
    top: 7,
    right: 90,
    backgroundColor: "transparent",
    padding: 20,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
});

export default ProfileScreen;
