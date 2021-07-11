import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Age from "../screens/SetupScreen/Age";
import Height from "../screens/SetupScreen/Height";
import Weight from "../screens/SetupScreen/Weight";
import Semester from "../screens/SetupScreen/Semester";
import Lifestyle from "../screens/SetupScreen/Lifestyle";

const Stack = createStackNavigator();

export const SetupRoute = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
            cardStyle: {
              backgroundColor: "#fff",
            },
            animationEnabled: false,
          }}
          initialRouteName="Age"
        >
          <Stack.Screen name="Age" component={Age} />
          <Stack.Screen name="Height" component={Height} />
          <Stack.Screen name="Weight" component={Weight} />
          <Stack.Screen name="Semester" component={Semester} />
          <Stack.Screen name="Lifestyle" component={Lifestyle} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
