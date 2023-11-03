import React, { useState, useEffect } from 'react';
import { TextInput, Text, ScrollView, View } from 'react-native';
import axios from 'axios';


export default function Screen1() {
  const view2 = [
    { id: 1, text: 'View 1' },
    { id: 2, text: 'View 2' },
    { id: 3, text: 'View 3' },
    { id: 4, text: 'View 4' },
    { id: 5, text: 'View 5' },
    { id: 6, text: 'View 6' },
    { id: 7, text: 'View 7' },
    { id: 8, text: 'View 8' },
    { id: 9, text: 'View 9' },
  ];

  const view3 = [
    { id: 1, text: 'View 1' },
    { id: 2, text: 'View 2' },
    { id: 3, text: 'View 3' },
    { id: 4, text: 'View 4' },
    { id: 5, text: 'View 5' },
    { id: 6, text: 'View 6' },
  ];

  const view4 = [
    { id: 1, text: 'View 1' },
    { id: 2, text: 'View 2' },
    { id: 3, text: 'View 3' },
  ];

  const view5 = [
    { id: 1, text: 'View 1' },
    { id: 2, text: 'View 2' },
    { id: 3, text: 'View 3' },
    { id: 4, text: 'View 4' },
    { id: 5, text: 'View 5' },
    { id: 6, text: 'View 6' },
    { id: 7, text: 'View 7' },
    { id: 8, text: 'View 8' },
    { id: 9, text: 'View 9' },
  ];




  const [wordDefinitions, setWordDefinitions] = useState({});

  useEffect(() => {
    const wordsToFetch = ["software", "developer", "system", "app", "framework"];

    const fetchDefinitions = async () => {
      const definitions = {};
      for (const word of wordsToFetch) {
        try {
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
          const wordDefinition = response.data[0]?.meanings[0]?.definitions[0]?.definition;
          definitions[word] = wordDefinition || `No definition found for ${word}`;
        } catch (error) {
          definitions[word] = `Error retrieving definition for ${word}`;
          console.error(`Error retrieving definition for ${word}:`, error);
        }
      }
      setWordDefinitions(definitions);
    };

    fetchDefinitions();
  }, []);




  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 80,
      }}>
      <Text style={{ fontSize: 40, marginVertical: 20, fontWeight: 'bold' }}>
        Crossroads
      </Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 134 }}></View>
                <View style={{ width: 16 }}>
                  <Text style={{ fontSize: 20 }}>1</Text>
                </View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
              </View>


              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 16 }}>
                  <Text style={{ fontSize: 20 }}>2</Text>
                </View>
                {view2.map((view) => (
                  <View key={view.id} style={{ padding: 2, borderWidth: 1, height: 34 }}>
                    <Text style={{ fontSize: 20 }}>{view.label}</Text>
                    <TextInput placeholder={''} size="20" defaultValue={0} />
                  </View>
                ))}
              </View>


              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 54 }}></View>
                <View style={{ width: 16 }}>
                  <Text style={{ fontSize: 20 }}>3</Text>
                </View>
                {view3.map((view) => (
                  <View key={view.id} style={{ padding: 2, borderWidth: 1, height: 34 }}>
                    <Text style={{ fontSize: 20 }}>{view.label}</Text>
                    <TextInput placeholder={''} size="20" defaultValue={0} />
                  </View>
                ))}
                <View style={{ width: 64 }}></View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 134 }}></View>
                <View style={{ width: 16 }}>
                  <Text style={{ fontSize: 20 }}>4</Text>
                </View>
                {view4.map((view) => (
                  <View key={view.id} style={{ padding: 2, borderWidth: 1, height: 34 }}>
                    <Text style={{ fontSize: 20 }}>{view.label}</Text>
                    <TextInput placeholder={''} size="20" defaultValue={0} />
                  </View>
                ))}
                <View style={{ width: 64 }}></View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 150 }}></View>
                <View style={{ padding: 2, borderWidth: 1 }}>
                  <TextInput placeholder={''} size="20" defaultValue={0} />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 27 }}></View>
                <View style={{ width: 16 }}>
                  <Text style={{ fontSize: 20 }}>5</Text>
                </View>
                {view5.map((view) => (
                  <View key={view.id} style={{ padding: 2, borderWidth: 1, height: 34 }}>
                    <Text style={{ fontSize: 20 }}>{view.label}</Text>
                    <TextInput placeholder={''} size="20" defaultValue={0} />
                  </View>
                  ))}
              </View>
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={{ height: 27 }}></View>
          <Text
            style={{ fontSize: 20, marginVertical: 20, fontWeight: 'bold' }}>
            Definitions
          </Text>
      <Text>1. {wordDefinitions["software"]}</Text>
      <Text>2. {wordDefinitions["developer"]}</Text>
      <Text>3. {wordDefinitions["system"]}</Text>
      <Text>4. {wordDefinitions["app"]}</Text>
      <Text>5. {wordDefinitions["framework"]}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
