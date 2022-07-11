import type { NextPage } from 'next';
import Image from 'next/Image';
import styled from 'styled-components';

interface MedicineProps {
  id: string;
  name: string;
  effect: string;
  left: number;
}

const MedicineComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  margin-top: 20px;
  padding-left: 20px;
`;

const MedicineIconImage = styled.div`
  margin-right: 10px;
  border-radius: 20px;
  box-shadow: 0px 5px 5px lightgray;
`;

const MedicineDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 75%;
`;

const EffectText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
`;

const NameText = styled.div`
  font-size: 12px;
  color: #595959;
`;

const LeftText = styled.div`
  padding: 8px 16px 8px 16px;
  background-color: #e6e6e6;
  border-radius: 10px;
  color: #595959;
`;

const Medicine: NextPage<MedicineProps> = ({
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
  return (
    <MedicineComponentContainer>
      <MedicineIconImage>
        <Image
          src={'/icon-192x192.png'}
          width={40}
          height={40}
          alt={'medicineIcon'}
        />
      </MedicineIconImage>
      <MedicineDataWrapper>
        <div>
          <EffectText>{group}</EffectText>
          <NameText>{name}</NameText>
        </div>
        <LeftText>{left}회</LeftText>
      </MedicineDataWrapper>
    </MedicineComponentContainer>
  );
};

export default Medicine;
