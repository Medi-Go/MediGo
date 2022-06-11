import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import MedicineDetail from "../screens/MedicineDetail";
import TotalMedicineList from "../screens/TotalMedicineList";

const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Page2" })}>
    <Text>go to page2</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Tabs", { screen: "Page3" })}>
    <Text>Go to page3</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="MedicineDetail" component={MedicineDetail} />
    <NativeStack.Screen
      name="TotalMedicineList"
      component={TotalMedicineList}
    />
    <NativeStack.Screen name="Page2Detail" component={ScreenTwo} />
    <NativeStack.Screen name="Page3Detail" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
