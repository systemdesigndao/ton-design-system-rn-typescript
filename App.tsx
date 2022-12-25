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
    <SafeAreaView>
      <ScrollView>
        <Text className="text-base text-white-1 p-2 text-center bg-main-1-dark">Dark theme</Text>
        <View className="flex flex-col h-screen bg-gray-1-dark p-2">
          <Text className="text-base font-sans text-main-1-dark">Typography</Text>
          <Text className="text-xs font-sans text-white-1">Font (xs)</Text>
          <Text className="text-sm font-sans text-white-1">Font (sm)</Text>
          <Text className="text-base font-sans text-white-1">Font (base)</Text>
          <Text className="text-lg font-sans text-white-1">Font (lg)</Text>
          <Text className="text-xl font-sans text-white-1">Font (xl)</Text>
          <Text className="text-2xl font-sans text-white-1">Font (2xl)</Text>
          <Text className="text-3xl font-sans text-white-1">Font (3xl)</Text>
          <Text className="text-4xl font-sans text-white-1">Font (4xl)</Text>
          <Text className="text-5xl font-sans text-white-1">Font (5xl)</Text>
          <Text className="text-6xl font-sans text-white-1">Font (6xl)</Text>
          <Text className="text-7xl font-sans text-white-1">Font (7xl)</Text>
          <Text className="text-8xl font-sans text-white-1">Font (8xl)</Text>
          <Text className="text-9xl font-sans text-white-1">Font (9xl)</Text>
        </View>
        <Text className="text-base text-white-1 p-2 text-center bg-main-1-light">Light theme</Text>
        <View className="flex flex-col h-screen bg-gray-1-light p-2">
          <Text className="text-base font-sans text-main-1-light">Typography</Text>
          <Text className="text-xs font-sans text-black-1">Font (xs)</Text>
          <Text className="text-sm font-sans text-black-1">Font (sm)</Text>
          <Text className="text-base font-sans text-black-1">Font (base)</Text>
          <Text className="text-lg font-sans text-black-1">Font (lg)</Text>
          <Text className="text-xl font-sans text-black-1">Font (xl)</Text>
          <Text className="text-2xl font-sans text-black-1">Font (2xl)</Text>
          <Text className="text-3xl font-sans text-black-1">Font (3xl)</Text>
          <Text className="text-4xl font-sans text-black-1">Font (4xl)</Text>
          <Text className="text-5xl font-sans text-black-1">Font (5xl)</Text>
          <Text className="text-6xl font-sans text-black-1">Font (6xl)</Text>
          <Text className="text-7xl font-sans text-black-1">Font (7xl)</Text>
          <Text className="text-8xl font-sans text-black-1">Font (8xl)</Text>
          <Text className="text-9xl font-sans text-black-1">Font (9xl)</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
