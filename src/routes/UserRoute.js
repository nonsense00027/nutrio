import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// import { createBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/UserScreen/HomeScreen/Home";
import Blank from "../screens/UserScreen/BlankScreen/Blank";
import Meal from "../screens/UserScreen/MealScreen/Meal";
import Collab from "../screens/UserScreen/CollabScreen/Collab";
import Profile from "../screens/UserScreen/ProfileScreen/Profile";
import Colors from "../shared/theme/Colors";

const Tabs = createBottomTabNavigator();

export const UserRoute = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Collab"
        tabBarOptions={{
          activeTintColor: Colors.primary,

          showLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#fff",
            borderRadius: 20,
            height: 70,
            // paddingTop: 10,
            paddingBottom: 0,
            ...styles.shadow,
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="Blank"
          component={Blank}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="blank" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="Meal"
          component={Meal}
          options={{
            tabBarLabel: "Plan",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={40}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Collab"
          component={Collab}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="blank" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tabs.Navigator>
      {/* <Tab.Navigator
        style={{
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 90,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initialRouteName="Home"
        activeColor={Colors.primary}
        barStyle={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
        labeled={true}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={22}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Blank"
          component={Blank}
          options={{
            tabBarLabel: "Upload",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="image-plus"
                color={color}
                size={22}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Meal"
          component={Meal}
          options={{
            tabBarLabel: "Meal",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="repeat" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Collab"
          component={Collab}
          options={{
            tabBarLabel: "Collab",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "bell" : "bell-outline"}
                color={color}
                size={22}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "bell" : "bell-outline"}
                color={color}
                size={22}
              />
            ),
          }}
        />
      </Tab.Navigator> */}
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
    shadowRadius: 4,
    elevation: 5,
  },
});
