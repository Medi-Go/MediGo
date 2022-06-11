import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface VmedicineProps {
  id: string;
  name: string;
  effect: string;
  left: number;
}

const MedicineComponent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding-left: 20px;
`;

const MedicineImage = styled.Image`
  width: 46px;
  height: 46px;
  margin-right: 10px;
`;

const MedicineDataWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 75%;
`;

const EffectText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
`;

const NameText = styled.Text`
  font-size: 12px;
  color: #595959;
`;

const LeftText = styled.Text`
  padding: 8px 16px 8px 16px;
  background-color: #e6e6e6;
  border-radius: 10px;
  color: #595959;
`;

const VMedicine: React.FC<VmedicineProps> = ({
  id,
  name,
  group,
  effect,
  combinedTaboo,
  ageTaboo,
  ingredients,
  company,
  cost,
  left,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Stack", {
      screen: "MedicineDetail",
      params: {
        id,
        name,
        group,
        effect,
        combinedTaboo,
        ageTaboo,
        ingredients,
        company,
        cost,
        left,
      },
    });
  };
  return (
    <MedicineComponent onPress={goToDetail}>
      <MedicineImage source={require("../assets/icon/medicineIcon.png")} />
      <MedicineDataWrapper>
        <View>
          <EffectText>{group}</EffectText>
          <NameText>{name}</NameText>
        </View>
        <LeftText>{left}회</LeftText>
      </MedicineDataWrapper>
    </MedicineComponent>
  );
};

export default VMedicine;
