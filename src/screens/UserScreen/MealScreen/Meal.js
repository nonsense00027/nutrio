import React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../shared/theme/Colors";
import Suggested from "./Suggested";
import { useAuthContext } from "../../../context/AuthContext";
import { getTER } from "../../../shared/utilities";

export default function Meal() {
  const { user } = useAuthContext();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.meal}>
        <View style={styles.meal__header}>
          <Text style={styles.meal__headerText}>Your Meal Plan</Text>
          <Text style={{ opacity: 0.7, fontWeight: "500" }}>
            You may follow the number of exchanges.
          </Text>
        </View>
        <View style={styles.meal__ter}>
          <View style={styles.meal__terOverlay}></View>
          <View style={styles.meal__terLeft}>
            <Text style={styles.meal__terLeftTitle}>Your total kcal:</Text>
            <Text style={styles.meal__terLeftValue}>
              {getTER(user.height, "PHL", user.lifestyle)}
            </Text>
          </View>
          <View style={styles.meal__terRight}>
            <TouchableOpacity
              style={styles.meal__generateButton}
              activeOpacity={0.7}
            >
              <Text style={styles.meal__terRightTitle}>Generate</Text>
              <MaterialCommunityIcons
                name="play"
                size={24}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.meal__exchanges}>
          <View style={styles.meal__exchangesRow}>
            <View style={styles.meal__exchangesColumn}>
              <Text style={styles.meal__exchangesTitle}>No. of rice</Text>
              <Text style={styles.meal__exchangesValue}>4</Text>
            </View>
            <View style={styles.meal__exchangesColumn}>
              <Text style={styles.meal__exchangesTitle}>No. of meat</Text>
              <Text style={styles.meal__exchangesValue}>2</Text>
            </View>
            <View style={styles.meal__exchangesColumn}>
              <Text style={styles.meal__exchangesTitle}>No. of milk</Text>
              <Text style={styles.meal__exchangesValue}>1</Text>
            </View>
          </View>
          <View style={styles.meal__exchangesRow}>
            <View style={styles.meal__exchangesColumn}>
              <Text style={styles.meal__exchangesTitle}>No. of vegetables</Text>
              <Text style={styles.meal__exchangesValue}>4</Text>
            </View>
            <View style={styles.meal__exchangesColumn}>
              <Text style={styles.meal__exchangesTitle}>No. of fruit</Text>
              <Text style={styles.meal__exchangesValue}>2</Text>
            </View>
            <View style={styles.meal__exchangesColumn}>
              <Text style={styles.meal__exchangesTitle}>No. of fat</Text>
              <Text style={styles.meal__exchangesValue}>4</Text>
            </View>
          </View>
        </View>

        <Suggested />
      </View>
    </SafeAreaView>
  );
}
