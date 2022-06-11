import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";
import VMedicine from "../components/VMedicine";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const medicineData = [
  {
    disease: "순환기계질환",
    medicineList: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "록사렉스캡슐 75mg",
        group: "기관지 천식 치료제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: [
          "아세트아미노펜",
          "이부프로펜",
          "티로프미드염산염",
          "아세트아미노산",
          "아세트아미노산",
        ],
        company: "팜젠사이언스",
        cost: 3000,
        left: 3,
        date: "2022-05-25",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "로스파정",
        group: "기관지 확장제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: ["아세트아미노펜", "이부프로펜", "티로프미드염산염"],
        company: "영진약품",
        cost: 3000,
        left: 2,
        date: "2022-05-26",
      },
    ],
  },
  {
    disease: "신장 질환",
    medicineList: [
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "포시가",
        group: "만성 심부전 치료제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: ["아세트아미노펜", "이부프로펜", "티로프미드염산염"],
        company: "에이앤엘바이오",
        cost: 3000,
        left: 2,
        date: "2022-05-25",
      },
    ],
  },
  {
    disease: "통증 질환",
    medicineList: [
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "코데인",
        group: "진통제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: ["아세트아미노펜", "이부프로펜", "티로프미드염산염"],
        company: "한국애브비",
        cost: 3000,
        left: 2,
        date: "2022-05-26",
      },
    ],
  },
];

const medicalData = [
  {
    disease: "순환기계질환",
    medicineList: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "록사렉스캡슐 75mg",
        group: "기관지 천식 치료제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: [
          "아세트아미노펜",
          "이부프로펜",
          "티로프미드염산염",
          "아세트아미노산",
          "아세트아미노산",
        ],
        company: "팜젠사이언스",
        cost: 3000,
        left: 3,
        date: "2022-05-25",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "로스파정",
        group: "기관지 확장제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: ["아세트아미노펜", "이부프로펜", "티로프미드염산염"],
        company: "영진약품",
        cost: 3000,
        left: 2,
        date: "2022-05-26",
      },
    ],
  },
  {
    disease: "신장 질환",
    medicineList: [
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "포시가",
        group: "만성 심부전 치료제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: ["아세트아미노펜", "이부프로펜", "티로프미드염산염"],
        company: "에이앤엘바이오",
        cost: 3000,
        left: 2,
        date: "2022-05-25",
      },
    ],
  },
  {
    disease: "통증 질환",
    medicineList: [
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "코데인",
        group: "진통제",
        effect: "교감신경성 기관지 확장제",
        combinedTaboo: "없음",
        ageTaboo: "12세미만",
        ingredients: ["아세트아미노펜", "이부프로펜", "티로프미드염산염"],
        company: "한국애브비",
        cost: 3000,
        left: 2,
        date: "2022-05-26",
      },
    ],
  },
];

const Calendar: React.FC<NativeStackScreenProps<any, "Calendar">> = () => {
  const [items, setItems] = useState({});
  const [selectedDate, setSelectedDate] = useState("");

  const loadItems = (day) => {
    for (let i = -15; i < 85; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);
      if (!items[strTime]) {
        items[strTime] = [];

        medicineData.forEach((d) => {
          d.medicineList.forEach((medicine) => {
            if (medicine.date === strTime) {
              items[strTime].push({
                name: medicine.name,
                group: medicine.group,
                type: "medicine",
              });
            }
          });
        });
      }
    }
    const newItems = {};
    Object.keys(items).forEach((key) => {
      newItems[key] = items[key];
    });
    setItems(newItems);
    console.log(items);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text>{item.name}</Text>
                <Text>{item.group}</Text>
              </View>
              <Avatar.Text label="in" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      // renderDay={(day, item) => {
      //   return <Text>{day}</Text>;
      // }}
      onDayPress={(day) => {
        setSelectedDate(day.dateString);
      }}
      selected={selectedDate}
      minDate={"2022-05-01"}
      maxDate={"2022-10-31"}
      renderItem={renderItem}
      markedDates={{
        "2022-05-26": { selected: true, marked: true },
        "2022-05-27": { marked: true },
        "2022-05-28": { disabled: true },
      }}
    />
  );
};

export default Calendar;
