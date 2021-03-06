import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../contexts/auth';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const MedicineDetailContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const MedicineNameText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
`;

const EffectView = styled.div`
  display: flex;
  flex-direction: row;
`;

const EffectText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin-top: 10px;
`;

const TabooTitleText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
  margin-top: 20px;
`;

const TabooView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

const AgeTabooView = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  width: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AgeTabooText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const CombinedTabooView = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #d2e9ff;
  width: 30%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CombinedTabooText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const IngredientTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #595959;
  margin-top: 20px;
`;

const IngredientList = styled.div`
  background-color: #d2e9ff;
  width: 80%;
  height: 25%;
  margin-top: 20px;
`;

const IngredientText = styled.div`
  font-size: 18px;
  color: #595959;
`;

const OthersView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`;

const CompanyView = styled.div``;

const CompanyTitleText = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #595959;
  margin-top: 20px;
`;

const CompanyText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 20px;
`;

const CostView = styled.div``;

const CostTitleText = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #595959;
  margin-top: 20px;
`;

const CostText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 20px;
`;

const Detail: NextPage = () => {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    // if (auth) {
    //   router.push('/main');
    // } else {
    //   router.push('/login/register');
    // }
    console.log(router.query.name);
  });

  return (
    <MedicineDetailContainer>
      <MedicineNameText>{router.query.name}</MedicineNameText>
      <EffectView>
        <EffectText>{router.query.group} | </EffectText>
        <EffectText>{router.query.effect}</EffectText>
      </EffectView>
      <TabooTitleText>????????????</TabooTitleText>
      <TabooView>
        <AgeTabooView>
          <AgeTabooText>????????????</AgeTabooText>
          <AgeTabooText>{router.query.ageTaboo}</AgeTabooText>
        </AgeTabooView>
        <CombinedTabooView>
          <CombinedTabooText>????????????</CombinedTabooText>
          <CombinedTabooText>{router.query.combinedTaboo}</CombinedTabooText>
        </CombinedTabooView>
      </TabooView>
      <IngredientTitle>????????????</IngredientTitle>
      <IngredientList>
        {router.query.ingredients.map((ingredient) => (
          <IngredientText>{ingredient}</IngredientText>
        ))}
      </IngredientList>

      <OthersView>
        <div>
          <CompanyTitleText>??????/?????????</CompanyTitleText>
          <CompanyText>{router.query.company}</CompanyText>
        </div>
        <div>
          <CostTitleText>????????????</CostTitleText>
          <CostText>{router.query.cost}???</CostText>
        </div>
      </OthersView>
    </MedicineDetailContainer>
  );
};

export default Detail;
