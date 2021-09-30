import { StyleSheet } from "react-native";
import Colors from "../../../shared/theme/Colors";

export default StyleSheet.create({
  collab: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  collab__header: {
    marginTop: 20,
    marginBottom: 30,
  },
  collab__headerTitle: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 26,
  },
  collab__headerSubtitle: {
    fontSize: 16,
  },
});
