import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Header from "../../../components/Stepper/Header";
import Stepper from "../../../components/Stepper/Stepper";
import { Button } from "react-native-elements";
import Colors from "../../../shared/theme/Colors";
import { useNavigation } from "@react-navigation/core";

export default function Intake() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Header title="Subjective Data" number={2} />
      <Stepper max={4} active={3} />
      <View style={styles.question}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={styles.question__box}>
            <Text style={styles.question__content}>
              Did you reduced dietary intake in the last week?
            </Text>
          </View>
        </View>

        <View style={styles.question__options}>
          <Button
            title="No"
            buttonStyle={styles.question__optionsButtonNo}
            titleStyle={styles.question__optionsLabel}
            //   disabled={!noEmpty()}
            //   loading={loading}
            onPress={() => navigation.navigate("Bmi")}
          />
          <Button
            title="Yes"
            buttonStyle={styles.question__optionsButtonYes}
            titleStyle={styles.question__optionsLabel}
            //   disabled={!noEmpty()}
            //   loading={loading}
            onPress={() => navigation.navigate("Severly")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    justifyContent: "space-between",
  },
  question__box: {
    paddingHorizontal: 50,
  },
  question__content: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  question__options: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  question__optionsButtonNo: {
    marginVertical: 5,
    backgroundColor: "#DADADA",
    paddingVertical: 10,
  },
  question__optionsButtonYes: {
    marginVertical: 5,
    backgroundColor: Colors.primary,
    paddingVertical: 10,
  },
  question__optionsLabel: {
    fontSize: 20,
  },
});
