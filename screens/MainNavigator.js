import React from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, RobotoMono_400Regular } from '@expo-google-fonts/roboto-mono';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ConfigScreen from './ConfigScreen';
import NotifsScreen from './NotificationsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Buscar',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ConfigStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Config" component={ConfigScreen} />
    </Stack.Navigator>
  );
};

const NotifsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notifs" component={NotifsScreen} />
    </Stack.Navigator>
  );
};

const getTabBarIcon = (route, focused) => {
  let iconName;

  if (route.name === 'Profile') {
    iconName = focused ? require('../assets/pixelarticons--user.png') : require('../assets/pixelarticons--user.png');
  } else if (route.name === 'Home') {
    iconName = focused ? require('../assets/pixelarticons--home.png') : require('../assets/pixelarticons--home.png');
  } else if (route.name === 'Config') {
    iconName = focused ? require('../assets/config.png') : require('../assets/config.png');
  } else if (route.name === 'Notifications') {
    iconName = focused ? require('../assets/inbox.png') : require('../assets/inbox.png');
  }

  return <Image source={iconName} style={{ width: 24, height: 24 }} />;
};

const MainNavigator = () => {
  const [fontsLoaded] = useFonts({
    RobotoMono: RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return getTabBarIcon(route, focused);
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'blue' },
          tabBarLabelStyle: { fontFamily: 'RobotoMono' },
        }}
      >
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Config" component={ConfigStack} />
        <Tab.Screen name="Notifications" component={NotifsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
