import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Listing = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>{id}Listing</Text>
    </View>
  );
};

export default Listing;
