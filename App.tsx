import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Home, Gallery, Information, Map, Todo } from "./src/contents";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RecoilRoot } from "recoil";
import { theme } from "./src/colors";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,

            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.point,
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Gallery"
            component={Gallery}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="images-outline" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="map-outline" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Todo"
            component={Todo}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="checkbox-outline" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="Information"
            component={Information}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon
                  name="information-circle-outline"
                  color={color}
                  size={size}
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
