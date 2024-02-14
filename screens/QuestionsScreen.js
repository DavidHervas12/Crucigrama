import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function QuestionsScreen(props) {
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
        <Text style={styles.textQuestion}>Frequently Questions</Text>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 35, height: 80 }}
          resizeMode="contain"
        />
      </View>
      <ScrollView style={styles.part2}>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
        <Text style={styles.bottomBorder}></Text>
        <Text style={styles.textQ}>Contact</Text>
        <Text style={styles.textR}>Contact</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#ffffff',
  },
  part1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  part2: {
    padding: 20,
  },
  textQuestion: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  textQ: {
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 10,
  },
  textR: {
    fontSize: 18,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#607FF8',
    marginBottom: 10,
  },
});
