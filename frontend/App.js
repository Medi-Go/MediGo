import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { Text, Button, Platform } from "react-native";

export default function App() {
  const [calendars, setCalendars] = useState([]);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
        setCalendars(calendars);
        console.log("Here are all your calendars:");
        console.log({ calendars });
      }
    })();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </>
  );
}
