import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import ScreensContext from "./ScreenContext";

const LogoutScreen = ({ navigation }) => {

  const { setIsLoggedIn, setUser } = useContext(ScreensContext); // Accede al contexto

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    navigation.replace('Login')
  };

  return (
    <View>
      <Text>¿Estás seguro de que quieres cerrar sesión?</Text>
      <Button title="Sí, cerrar sesión" onPress={handleLogout} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default LogoutScreen;
