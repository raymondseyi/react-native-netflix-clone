import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
const TabLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle:"For Oluwaseyi",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              size={24}
              color={Colors[colorScheme ?? "light"].icon}
            />
          ),
          headerTitleStyle:{fontWeight:"bold",fontSize:20},
          headerTitleAlign:"left",
          headerRight: () => (
            <>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="cast"
                  size={24}
                  color={Colors[colorScheme ?? "light"].icon}
                  style={{ marginHorizontal:20 }}
                />
                <Ionicons
                  name="search"
                  size={24}
                  color={Colors[colorScheme ?? "light"].icon}
                />
              </View>
            </>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="new_and_hot"
        options={{
          title: "New and Hot",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="play-box-multiple-outline"
              size={24}
              color={Colors[colorScheme ?? "light"].icon}
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="my_netflix"
        options={{ title: "My Netflix" }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
