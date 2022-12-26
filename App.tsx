import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mulish-Black': require('./src/assets/fonts/Mulish/Mulish-Black.ttf'), // 700
    'Mulish-Regular': require('./src/assets/fonts/Mulish/Mulish-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="text-base text-white-1 p-2 text-center bg-main-1-dark font-bold">
          Dark theme
        </Text>
        <View className="flex flex-col h-fit bg-gray-1-dark p-2">
          <Text className="text-base font-regular text-main-1-dark py-2">
            Typography
          </Text>
          <Text className="text-xs font-regular text-white-1">Font (xs)</Text>
          <Text className="text-sm font-regular text-white-1">Font (sm)</Text>
          <Text className="text-base font-regular text-white-1">
            Font (base)
          </Text>
          <Text className="text-lg font-regular text-white-1">Font (lg)</Text>
          <Text className="text-xl font-regular text-white-1">Font (xl)</Text>
          <Text className="text-2xl font-regular text-white-1">Font (2xl)</Text>
          <Text className="text-3xl font-regular text-white-1">Font (3xl)</Text>
          <Text className="text-4xl font-regular text-white-1">Font (4xl)</Text>
          <Text className="text-5xl font-regular text-white-1">Font (5xl)</Text>
          <Text className="text-6xl font-regular text-white-1">Font (6xl)</Text>
          <Text className="text-7xl font-regular text-white-1">Font (7xl)</Text>
          <Text className="text-8xl font-regular text-white-1">Font (8xl)</Text>
          <Text className="text-9xl font-regular text-white-1">Font (9xl)</Text>
          <Text className="text-base font-regular text-main-1-dark py-2">
            Inputs
          </Text>
          <TextInput
            className="
            form-control
            block
            w-full
            px-3
            py-3
            font-normal
            text-white-1
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:bg-white focus:border-main-1-dark focus:outline-none"
          />
        </View>
        <Text className="text-base text-white-1 p-2 text-center bg-main-1-light font-bold">
          Light theme
        </Text>
        <View className="flex flex-col h-fit bg-gray-1-light p-2">
          <Text className="text-base font-regular text-main-1-light py-2">
            Typography
          </Text>
          <Text className="text-xs font-regular text-black-1">Font (xs)</Text>
          <Text className="text-sm font-regular text-black-1">Font (sm)</Text>
          <Text className="text-base font-regular text-black-1">
            Font (base)
          </Text>
          <Text className="text-lg font-regular text-black-1">Font (lg)</Text>
          <Text className="text-xl font-regular text-black-1">Font (xl)</Text>
          <Text className="text-2xl font-regular text-black-1">Font (2xl)</Text>
          <Text className="text-3xl font-regular text-black-1">Font (3xl)</Text>
          <Text className="text-4xl font-regular text-black-1">Font (4xl)</Text>
          <Text className="text-5xl font-regular text-black-1">Font (5xl)</Text>
          <Text className="text-6xl font-regular text-black-1">Font (6xl)</Text>
          <Text className="text-7xl font-regular text-black-1">Font (7xl)</Text>
          <Text className="text-8xl font-regular text-black-1">Font (8xl)</Text>
          <Text className="text-9xl font-regular text-black-1">Font (9xl)</Text>
          <Text className="text-base font-regular text-main-1-light py-2">
            Inputs
          </Text>
          <TextInput
            className="
            form-control
            block
            w-full
            px-3
            py-3
            font-normal
            text-black-1
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:bg-white focus:border-main-1-light focus:outline-none"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
