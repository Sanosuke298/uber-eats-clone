import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import { TouchableOpacity } from "react-native-web";

export default function Home() {
  return (
    <SafeAreaView>
      <HeaderButton /> {/* Correct the component name here */}
      <HeaderButton /> {/* Correct the component name here */}
    </SafeAreaView>
  );
}

const HeaderButton = () => (
  <View>
    <TouchableOpacity>
      <Text>Delivery</Text>
    </TouchableOpacity>
  </View>
);
