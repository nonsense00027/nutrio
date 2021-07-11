import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AuthRoute } from "./routes/AuthRoute";
import { SetupRoute } from "./routes/SetupRoute";
import { UserRoute } from "./routes/UserRoute";
import LoadingScreen from "./components/LoadingScreen";
import { useAuthContext } from "./context/AuthContext";

const getScreen = (user) => {
  if (user) {
    if (user.profileComplete) {
      return <UserRoute />;
    } else {
      return <SetupRoute />;
    }
  } else {
    return <AuthRoute />;
  }
};
export default function Main() {
  const { user, authLoading } = useAuthContext();

  if (authLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.main}>
      {getScreen(user)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
  },
});
