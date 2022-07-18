import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../contexts/auth';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const MedicineDetailList = styled.div`
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
`;

const CombinedTabooText = styled.div`
  font-size: 18px;
  color: #595959;
  margin-top: 5px;
`;

const IngredientList = styled.div`
  background-color: #d2e9ff;
  width: 80%;
  height: 25%;
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

const CostView = styled.div`
  display: flex;
`;

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
  });

  return (
    <>
      <>
        <MedicineNameText>{'params.name'}</MedicineNameText>
        <EffectView>
          <EffectText>{'params.group'} | </EffectText>
          <EffectText>{'params.effect'}</EffectText>
        </EffectView>
        <TabooTitleText>유의사항</TabooTitleText>
        <TabooView>
          <AgeTabooView>
            <AgeTabooText>연령금기</AgeTabooText>
            <AgeTabooText>{'params.ageTaboo'}</AgeTabooText>
          </AgeTabooView>
          <CombinedTabooView>
            <CombinedTabooText>병용금기</CombinedTabooText>
            <CombinedTabooText>{'params.combinedTaboo'}</CombinedTabooText>
          </CombinedTabooView>
        </TabooView>
        <div>성분정보</div>
        {/* <IngredientList
              data={'params.ingredients'}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <IngredientText>{item}</IngredientText>}
            /> */}
        <OthersView>
          <CompanyView>
            <CompanyTitleText>제조/수입사</CompanyTitleText>
            <CompanyText>{'params.company'}</CompanyText>
          </CompanyView>
          <CostView>
            <CostTitleText>급여정보</CostTitleText>
            <CostText>{'params.cost'}원</CostText>
          </CostView>
        </OthersView>
      </>
    </>
  );
};

export default Detail;