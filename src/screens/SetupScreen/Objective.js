import React, { useState } from "react";
import styles from "./styles";
import { Text, View, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Stepper from "../../components/Stepper/Stepper";
import Header from "../../components/Stepper/Header";
import { useNavigation } from "@react-navigation/core";
import DropDownPicker from "react-native-dropdown-picker";

export default function Objective() {
  const navigation = useNavigation();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dbw, setDbw] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiCategory, setBmiCategory] = useState(null);

  console.log("BMI CATEGORY", bmiCategory);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Normal", value: "Normal" },
    { label: "Underweight", value: "Underweight" },
    { label: "Overweight", value: "Overweight" },
    { label: "Obese", value: "Obese" },
  ]);

  return (
    <ScrollView>
      <Header title="Objective Data" number={3} />
      <Stepper max={1} active={1} />
      <View style={styles.information}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Height(cm)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setHeight}
              value={height}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>Weight(kg)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setWeight}
              value={weight}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>DBW(kg)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setDbw}
              value={dbw}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.col}>
            <Text style={styles.textInput__label}>BMI(kg/m2)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setBmi}
              value={bmi}
            />
          </View>
        </View>
        <View style={{ zIndex: 9999 }}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textInput__label}>BMI Category</Text>

              <DropDownPicker
                style={{
                  marginTop: 5,
                  borderColor: "lightgray",
                  backgroundColor: "#eeeeee",
                }}
                containerStyle={{
                  backgroundColor: "#fff",
                }}
                dropDownContainerStyle={{
                  backgroundColor: "#fff",
                  borderColor: "lightgray",
                }}
                zIndex={10000}
                open={open}
                value={bmiCategory}
                items={items}
                setOpen={setOpen}
                setValue={setBmiCategory}
                setItems={setItems}
                placeholder="Select category"
                placeholderStyle={{
                  color: "grey",
                }}
              />
            </View>
          </View>
        </View>

        <View>
          <Button
            title="Submit"
            buttonStyle={styles.information__submitButton}
            //   titleStyle={styles.information__submitButtonLabel}
            //   disabled={!noEmpty()}
            //   loading={loading}
            onPress={() => navigation.navigate("Bmi")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
