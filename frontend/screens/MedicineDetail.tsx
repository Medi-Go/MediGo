import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const MedicineDetailList = styled.FlatList`
  margin-top: 20px;
  margin-left: 20px;
`;

const MedicineNameText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
`;

const EffectView = styled.View`
  display: flex;
  flex-direction: row;
`;

const EffectText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin-top: 10px;
`;

const TabooTitleText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
  margin-top: 20px;
`;

const TabooView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

const AgeTabooView = styled.View`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  width: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const AgeTabooText = styled.Text`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const CombinedTabooView = styled.View`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  width: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const CombinedTabooText = styled.Text`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const IngredientList = styled.FlatList`
  background-color: #d2e9ff;
  width: 80%;
  height: 25%;
`;

const IngredientText = styled.Text`
  font-size: 18px;
  color: #595959;
`;

const OthersView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`;

const CompanyView = styled.View``;

const CompanyTitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #595959;
  margin-top: 20px;
`;

const CompanyText = styled.Text`
  font-size: 18px;
  color: #595959;
  margin-top: 20px;
`;

const CostView = styled.View`
  display: flex;
`;

const CostTitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #595959;
  margin-top: 20px;
`;

const CostText = styled.Text`
  font-size: 18px;
  color: #595959;
  margin-top: 20px;
`;

const MedicineDetail = ({ route: { params } }) => (
  <MedicineDetailList
    ListHeaderComponent={
      <>
        <MedicineNameText>{params.name}</MedicineNameText>
        <EffectView>
          <EffectText>{params.group} | </EffectText>
          <EffectText>{params.effect}</EffectText>
        </EffectView>
        <TabooTitleText>유의사항</TabooTitleText>
        <TabooView>
          <AgeTabooView>
            <AgeTabooText>연령금기</AgeTabooText>
            <AgeTabooText>{params.ageTaboo}</AgeTabooText>
          </AgeTabooView>
          <CombinedTabooView>
            <CombinedTabooText>병용금기</CombinedTabooText>
            <CombinedTabooText>{params.combinedTaboo}</CombinedTabooText>
          </CombinedTabooView>
        </TabooView>
        <Text>성분정보</Text>
        <IngredientList
          data={params.ingredients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <IngredientText>{item}</IngredientText>}
        />
        <OthersView>
          <CompanyView>
            <CompanyTitleText>제조/수입사</CompanyTitleText>
            <CompanyText>{params.company}</CompanyText>
          </CompanyView>
          <CostView>
            <CostTitleText>급여정보</CostTitleText>
            <CostText>{params.cost}원</CostText>
          </CostView>
        </OthersView>
      </>
    }
  />
);

export default MedicineDetail;
