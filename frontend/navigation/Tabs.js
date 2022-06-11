import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screens/Main";
import Page3 from "../screens/Page3";
import Calendar from "../screens/Calendar";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Page3" component={Page3} />
  </Tab.Navigator>
);

export default Tabs;
