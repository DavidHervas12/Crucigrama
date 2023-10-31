import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

// 10 x 12

export default function Screen2() {
  const board = () => {
    
    let array1 = [];
    for (let i = 0; i < 12; i++) {
      let array2 = [];
      for (let j = 0; j < 10; j++) {
        array2.push(String.fromCharCode(Math.floor(Math.random() * 25 + 97)));
      }
      array1.push(array2);
    }
    return array1;
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 80,
      }}
    >
      <Text style={{ fontSize: 40, marginVertical: 20, fontWeight: "bold" }}>
        Sopa de letras
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                {board().map((row, i) => {
                  return (
                    <View key={i.toString()}>
                      {row.map((letter, j) => {
                        return (
                          <TouchableOpacity
                            key={j.toString()}
                            style={styles.cell}
                          >
                            <Text style={{ fontSize: 15 }}>{letter}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "white",
    width: 30,
    padding: 10,
    borderWidth: 1,
  },
});
