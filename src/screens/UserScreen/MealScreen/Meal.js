import React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView } from "react-native";

export default function Meal() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.meal}>
        <Text>Meal</Text>
      </View>
    </SafeAreaView>
  );
}
