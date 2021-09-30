import React from "react";
import styles from "./styles";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useAuthContext } from "../../../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../shared/theme/Colors";
import DieticianList from "../../../components/Dietician/DieticianList";

export default function Collab() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <ScrollView> */}
      <View style={styles.collab}>
        <View style={styles.collab__header}>
          <Text style={styles.collab__headerTitle}>Dietician</Text>
          <Text style={styles.collab__headerSubtitle}>
            Consult with a dietician
          </Text>
        </View>

        <DieticianList />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
