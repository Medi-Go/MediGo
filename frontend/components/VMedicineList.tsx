import React from "react";
import styled from "styled-components/native";
import VMedicine from "./VMedicine";
import { useNavigation } from "@react-navigation/native";

interface VmedicineListProps {
  title: string;
  data: any[];
}

const MedicineContainer = styled.View`
  margin-bottom: 40px;
  background-color: #f4f5f7;
  border-radius: 20px;
  margin: 20px;
  height: 280px;
  overflow: hidden;
`;

const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 10px;
`;

const TitleText = styled.Text`
  color: #595959;
  font-size: 18px;
  font-weight: bold;
`;

const ArrowBtn = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
`;

const BtnImage = styled.Image`
  width: 34px;
  height: 34px;
`;

const MedicineList = styled.FlatList``;

const MedicineCategoryText = styled.Text`
  color: #595959;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
  margin-top: 20px;
`;

const VMedicineList: React.FC<VmedicineListProps> = ({ title, data }) => {
  const navigation = useNavigation();

  const goToTotalMedicineList = () => {
    navigation.navigate("Stack", {
      screen: "TotalMedicineList",
      params: { title, data },
    });
  };

  return (
    <MedicineContainer>
      <TitleView>
        <TitleText>{title}</TitleText>
        <ArrowBtn onPress={goToTotalMedicineList}>
          <BtnImage source={require("../assets/icon/arrowBtn.png")} />
        </ArrowBtn>
      </TitleView>
      <MedicineList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <MedicineCategoryText>{item.disease}</MedicineCategoryText>
            <VMedicine
              id={item.medicineList[0].id}
              name={item.medicineList[0].name}
              group={item.medicineList[0].group}
              effect={item.medicineList[0].effect}
              combinedTaboo={item.medicineList[0].combinedTaboo}
              ageTaboo={item.medicineList[0].ageTaboo}
              ingredients={item.medicineList[0].ingredients}
              company={item.medicineList[0].company}
              cost={item.medicineList[0].cost}
              left={item.medicineList[0].left}
            />
          </>
        )}
      />
    </MedicineContainer>
  );
};

export default VMedicineList;
