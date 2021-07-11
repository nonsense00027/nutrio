import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/UserScreen/HomeScreen/Home";
import Blank from "../screens/UserScreen/BlankScreen/Blank";
import Meal from "../screens/UserScreen/MealScreen/Meal";
import Collab from "../screens/UserScreen/CollabScreen/Collab";
import Profile from "../screens/UserScreen/ProfileScreen/Profile";

const Tabs = createBottomTabNavigator();

export const UserRoute = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          //   showLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#fff",
            borderRadius: 15,
            height: 90,
            ...styles.shadow,
          },
        }}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Blank" component={Blank} />
        <Tabs.Screen name="Meal" component={Meal} />
        <Tabs.Screen name="Collab" component={Collab} />
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      // width: 0,
      //   height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    elevation: 5,
  },
});
