import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ContactScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <TouchableOpacity onPress={() => console.log('Flecha presionada')}>
          <Icon
            name="arrow-back"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.textContact}>Contact</Text>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 35, height: 80 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.part2}>
          <Text style={styles.text}>Contact</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#ffffff',
  },
  part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  part2: {
    flex: 3,
    padding: 20,
  },
  textContact: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  text: {
    textAlign: 'justify',
    fontSize: 18,
    marginVertical: 10,
  },
});

