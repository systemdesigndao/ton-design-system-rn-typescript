import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
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
    <ScrollView>
      <Text className="text-xs">Font (xs)</Text>
      <Text style={{ fontSize: 12, lineHeight: 16 }}>Font (xs) - custom</Text>
      <Text className="text-sm">Font (sm)</Text>
      <Text style={{ fontSize: 14, lineHeight: 20 }}>Font (sm) - custom</Text>
      <Text className="text-base">Font (base)</Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>Font (base) - custom</Text>
      <Text className="text-lg font-sans">Font (lg)</Text>
      <Text style={{ fontSize: 18, lineHeight: 28 }}>Font (lg) - custom</Text>
      <Text className="text-xl font-sans">Font (xl)</Text>
      <Text style={{ fontSize: 20, lineHeight: 28 }}>Font (xl) - custom</Text>
      <Text className="text-2xl font-sans">Font (2xl)</Text>
      <Text style={{ fontSize: 24, lineHeight: 32 }}>Font (2xl) - custom</Text>
      <Text className="text-3xl font-sans">Font (3xl)</Text>
      <Text style={{ fontSize: 30, lineHeight: 36 }}>Font (3xl) - custom</Text>
      <Text className="text-4xl font-sans">Font (4xl)</Text>
      <Text style={{ fontSize: 36, lineHeight: 40 }}>Font (4xl) - custom</Text>
      <Text className="text-5xl font-sans">Font (5xl)</Text>
      <Text style={{ fontSize: 48, lineHeight: 48 }}>Font (5xl) - custom</Text>
      <Text className="text-6xl font-sans">Font (6xl)</Text>
      <Text style={{ fontSize: 60, lineHeight: 60 }}>Font (6xl) - custom</Text>
      <Text className="text-7xl font-sans">Font (7xl)</Text>
      <Text style={{ fontSize: 72, lineHeight: 72 }}>Font (7xl) - custom</Text>
      <Text className="text-8xl font-sans">Font (8xl)</Text>
      <Text style={{ fontSize: 96, lineHeight: 96 }}>Font (8xl) - custom</Text>
      <Text className="text-9xl font-sans">Font (9xl)</Text>
      <Text style={{ fontSize: 128, lineHeight: 128 }}>Font (9xl) - custom</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
