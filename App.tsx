import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Home, Gallery, Information, Map } from "./src/contents";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => (
                <Icon name="home-outline" size={30} color="black" />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{
              tabBarIcon: () => (
                <Icon name="images-outline" size={30} color="black" />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarIcon: () => (
                <Icon name="map-outline" size={30} color="black" />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Information"
            component={Information}
            options={{
              tabBarIcon: () => (
                <Icon
                  name="information-circle-outline"
                  size={30}
                  color="black"
                />
              ),
              unmountOnBlur: true,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
});
