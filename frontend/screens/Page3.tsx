import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Page3: React.FC<NativeStackScreenProps<any, "Page3">> = ({
  navigation: { navigate },
}) => (
  <Btn onPress={() => navigate("Stack", { screen: "Page3Detail" })}>
    <Text>Page3</Text>
  </Btn>
);

export default Page3;
