import { FunctionComponent } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <MyText name="Mila" />
          <Image
            source={require("./cake.png")}
            style={{ width: 100, height: 100 }}
          />

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
            }}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

interface MyTextProps {
  name: string;
}

const MyText: FunctionComponent<MyTextProps> = ({ name }) => {
  const onPressEventHandler = () => {
    console.log("You just pressed the text component");
  };
  return (
    <View>
      <Text onPress={onPressEventHandler} style={styles.text}>
        Hello {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
});

export default App;
