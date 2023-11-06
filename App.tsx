import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { RecoilRoot } from "recoil";
import { Home, Gallery, Information, Location } from "./src/contents";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
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
          <Tab.Screen
            name="Location"
            component={Location}
            options={{
              tabBarIcon: () => (
                <Icon name="location-outline" size={30} color="black" />
              ),
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
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
