import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useFonts } from 'expo-font';

import "./styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mulish': require('./assets/fonts/Mulish/static/Mulish-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="w-full">
      <ScrollView className="w-full">
        <Text className="text-base text-white-1 p-2 text-center bg-main-dark-5">Dark theme</Text>
        <View className="flex flex-col h-screen bg-gray-dark-5 p-2">
          <Text className="text-title1 font-sans text-main-dark-4">Typography</Text>
          <Text className="text-title1 font-sans text-white-1">Title 1</Text>
        </View>
        <Text className="text-title-1 text-white-1 p-2 text-center bg-main-light-5">Light theme</Text>
        <View className="flex flex-col h-screen bg-white-1 p-2">
          <Text className="text-title1 font-sans text-main-light-4">Typography</Text>
          <Text className="text-title1 font-sans text-black-5">Title 1</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
