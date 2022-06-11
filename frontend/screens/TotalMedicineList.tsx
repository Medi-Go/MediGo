import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import VMedicine from "../components/VMedicine";
import styled from "styled-components/native";

const TitleText = styled.Text`
  color: #595959;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 20px;
`;

const BtnView = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const TotalBtn = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.totalClicked === true ? "black" : "gray"};
  align-items: center;
  padding: 10px 0px;
`;

const TotalText = styled.Text`
  color: ${(props) => (props.totalClicked === true ? "black" : "gray")};
`;

const CategoryBtn = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.categoryClicked === true ? "black" : "gray"};
  align-items: center;
  padding: 10px 0px;
`;

const CategoryText = styled.Text`
  color: ${(props) => (props.categoryClicked === true ? "black" : "gray")};
`;

const MedicineList = styled.FlatList`
  margin-bottom: 40px;
`;

const DiseaseText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin: 20px 20px;
`;

const TotalMedicineList = ({ route: { params } }) => {
  const [totalClicked, setTotalClicked] = useState(true);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const onTotalClickListener = () => {
    setTotalClicked(true);
    setCategoryClicked(false);
  };
  const onCategoryClickListener = () => {
    setTotalClicked(false);
    setCategoryClicked(true);
  };
  return (
    <>
      <TitleText>{params.title}</TitleText>
      <BtnView>
        <TotalBtn onPress={onTotalClickListener} totalClicked={totalClicked}>
          <TotalText totalClicked={totalClicked}>전체</TotalText>
        </TotalBtn>
        <CategoryBtn
          onPress={onCategoryClickListener}
          categoryClicked={categoryClicked}
        >
          <CategoryText categoryClicked={categoryClicked}>종류별</CategoryText>
        </CategoryBtn>
      </BtnView>
      <MedicineList
        data={params.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            {categoryClicked && <DiseaseText>{item.disease}</DiseaseText>}
            {item.medicineList.map((medicine) => (
              <VMedicine
                id={medicine.id}
                name={medicine.name}
                group={medicine.group}
                effect={medicine.effect}
                combinedTaboo={medicine.combinedTaboo}
                ageTaboo={medicine.ageTaboo}
                ingredients={medicine.ingredients}
                company={medicine.company}
                cost={medicine.cost}
                left={medicine.left}
              />
            ))}
          </>
        )}
      />
    </>
  );
};

export default TotalMedicineList;
