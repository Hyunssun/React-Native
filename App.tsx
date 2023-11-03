import React from "react";
import Home from "./src/contents/Home";
import Gallery from "./src/contents/Gallery";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Icon name="home-outline" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{
            tabBarIcon: () => (
              <Icon name="images-outline" size={30} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
